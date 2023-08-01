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

            if (id.includes("inner")) {
                // Handle inner pie chart click
                const clickedPiece = dataInner.find((item) => item.id === id);

                if (clickedPiece) {
                    setPopupContent(clickedPiece);
                    setIsPopupOpen(true);
                }
            } else {
                // Handle outer pie chart click
                const clickedPiece = dataOuter.find((item) => item.id === id);

                if (clickedPiece) {
                    setPopupContent(clickedPiece);
                    setIsPopupOpen(true);
                }
            }
        }
    };

    const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
            setIsPopupOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handlePieClick);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("click", handlePieClick);
            document.removeEventListener("keydown", handleEscapeKey);
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
                    innerRadius={0.8}
                    borderWidth={3}
                    borderColor={"black"}
                    margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                    activeOuterRadiusOffset={12}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={"fff"}
                    arcLinkLabelsThickness={2}
                    arcLabel="id"
                    enableArcLabels={true}
                    enableArcLinkLabels={false}
                    animate
                    tooltip={() => null}
                    onClick={(data, event) => handlePieClick(data, event)}
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
                    margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                    activeOuterRadiusOffset={12}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={"fff"}
                    arcLinkLabelsThickness={2}
                    arcLabel="id"
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    animate
                    tooltip={() => null}
                    onClick={(data, event) => handlePieClick(data, event)}
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
                    isInnerLayer={popupContent.id.includes("inner")}
                />
            )}
        </div>
    );
};

export default PieChart;
