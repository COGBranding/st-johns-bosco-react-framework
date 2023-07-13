import { ResponsivePie } from "@nivo/pie";
import { dataLearningFramework as data } from "../../data/dataLearningFramework";

const PieChart = () => {
    const dataFull = [
        { id: "Reflecting", value: 25, color: "#FFD700" },
        { id: "Belonging", value: 25, color: "#FFD700" },
        { id: "Learning", value: 25, color: "#FFD700" },
        { id: "Celebrating", value: 25, color: "#FFD700" },
    ];

    return (
        <div
            className="pie-chart"
            style={{ display: "flex", width: "100%", height: "600px" }}
        >
            {/* Render the salesian values cross */}
            <div className="pie-chart__cross">
                <p className="pie-chart__cross__title font-script">
                    Salesian Values
                </p>

                <div className="pie-chart__cross__piece pie-chart__cross__piece--horizontal"></div>
                <div className="pie-chart__cross__piece pie-chart__cross__piece--vertical"></div>
            </div>

            {/* Render the inner pie pie chart */}
            <ResponsivePie
                data={dataFull}
                colorBy={(d) => d.color} // Use the 'color' property in dataFull to determine the color
                startAngle={-180}
                endAngle={180}
                innerRadius={0}
                padAngle={0.7}
                borderWidth={4}
                borderColor={"black"}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                activeOuterRadiusOffset={8}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={"fff"}
                arcLinkLabelsThickness={2}
                arcLabelsSkipAngle={10}
                animate
            />

            {/* Render the outer pie chart */}
        </div>
    );
};

export default PieChart;
