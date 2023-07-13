import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Popup } from "../index";
import { dataLearningFramework as dataOuter } from "../../data/dataLearningFramework";
import { dataWellbeingFramework as dataInner } from "../../data/dataWellbeingFramework";

const PieChart = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const handlePieClick = (data, event) => {
        if (data && data.data) {
            const { id } = data.data;

            // Find the corresponding data object in dataInner or dataOuter
            const pieData = id.startsWith("inner") ? dataInner : dataOuter;
            const clickedPiece = pieData.find((item) => item.id === id);

            if (clickedPiece) {
                setPopupContent(clickedPiece);
                setIsPopupOpen(true);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("click", handlePieClick);

        return () => {
            document.removeEventListener("click", handlePieClick);
        };
    }, []);

    return (
        <div className="pie-chart">
            {/* Render the salesian values cross */}
            <div className="pie-chart__cross">
                <p className="pie-chart__cross__title font-script">
                    Salesian Values
                </p>

                <div className="pie-chart__cross__piece pie-chart__cross__piece--horizontal"></div>
                <div className="pie-chart__cross__piece pie-chart__cross__piece--vertical"></div>
            </div>

            {/* Render the outer pie chart */}
            <div className="pie-chart--outer">
                <ResponsivePie
                    data={dataOuter}
                    startAngle={-45}
                    innerRadius={0.75}
                    borderWidth={3}
                    borderColor={"black"}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    activeOuterRadiusOffset={12}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={"fff"}
                    arcLinkLabelsThickness={2}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    animate
                    tooltip={() => null}
                    onClick={handlePieClick}
                />
            </div>

            {/* Render the inner pie chart */}
            <div className="pie-chart--inner">
                <ResponsivePie
                    data={dataInner}
                    startAngle={-180}
                    endAngle={180}
                    innerRadius={0}
                    borderWidth={3}
                    borderColor={"black"}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    activeOuterRadiusOffset={12}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={"fff"}
                    arcLinkLabelsThickness={2}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    animate
                    tooltip={() => null}
                    onClick={handlePieClick}
                />
            </div>

            {popupContent && (
                <Popup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    borderColor={popupContent.borderColor}
                    framework={popupContent.framework}
                    frameworkCategory={popupContent.frameworkCategory}
                    heading={popupContent.heading}
                    subheading={popupContent.subheading}
                    teacherListItems={popupContent.teacherListItems}
                    learnerListItems={popupContent.learnerListItems}
                    principleText={popupContent.principleText}
                    principleListItems={popupContent.principleListItems}
                />
            )}
        </div>
    );
};

export default PieChart;
