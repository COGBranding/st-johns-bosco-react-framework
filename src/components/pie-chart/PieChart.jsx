import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Popup } from "../index";
import { dataLearningFramework as dataOuter } from "../../data/dataLearningFramework";
import { dataWellbeingFramework as dataInner } from "../../data/dataWellbeingFramework";

const PieChart = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [currentPopupIndex, setCurrentPopupIndex] = useState(0);

    const handlePieClick = (data, event) => {
        if (data && data.data) {
            const { id } = data.data;

            // Find the corresponding data object in dataInner or dataOuter
            // If the data id starts with inner it will render popup content from the dataInner file, else dataOuter file
            const pieData = id.startsWith("inner") ? dataInner : dataOuter;
            const clickedPiece = pieData.find((item) => item.id === id);

            if (clickedPiece) {
                const clickedIndex = pieData.findIndex(
                    (item) => item.id === id
                );

                setPopupContent(clickedPiece);
                setIsPopupOpen(true);
                setCurrentPopupIndex(clickedIndex);
            }
        }
    };

    const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
            setIsPopupOpen(false);
        }
    };

    const handleArrowKeys = (event) => {
        if (event.key === "ArrowLeft") {
            // Show the previous popup
            setCurrentPopupIndex((prevIndex) => {
                if (prevIndex === 0) {
                    return dataOuter.length + dataInner.length - 1; // Set the index to the last popup of the combined data
                } else {
                    return prevIndex - 1;
                }
            });
        } else if (event.key === "ArrowRight") {
            // Show the next popup
            setCurrentPopupIndex((prevIndex) => {
                if (prevIndex === dataOuter.length + dataInner.length - 1) {
                    return 0; // Set the index to the first popup of the combined data
                } else {
                    return prevIndex + 1;
                }
            });
        }
    };

    useEffect(() => {
        document.addEventListener("click", handlePieClick);
        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("keydown", handleArrowKeys);

        return () => {
            document.removeEventListener("click", handlePieClick);
            document.removeEventListener("keydown", handleEscapeKey);
            document.removeEventListener("keydown", handleArrowKeys);
        };
    }, []);

    useEffect(() => {
        if (isPopupOpen) {
            const popupData = dataOuter.concat(dataInner);
            const currentPopup = popupData[currentPopupIndex];
            setPopupContent(currentPopup);
        }
    }, [currentPopupIndex, isPopupOpen]);

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
