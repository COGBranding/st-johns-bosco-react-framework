import { dataLearningFramework as dataInner } from "../../data/dataLearningFramework";
import { dataWellbeingFramework as dataOuter } from "../../data/dataWellbeingFramework";
import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
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
                    enableArcLinkLabels={false}
                    animate
                    tooltip={() => null}
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
                />
            </div>
        </div>
    );
};

export default PieChart;
