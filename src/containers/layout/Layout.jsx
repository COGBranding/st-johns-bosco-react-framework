import React from "react";
import {
    Callout,
    Content,
    Framework,
    InnerText,
    Key,
    OuterText,
    PieChart,
} from "../../components";
import { dataFrameworkContent as data } from "../../data/dataFrameworkContent";

const Layout = () => {
    return (
        <div className="section learning-framework">
            <div className="row learning-framework__container">
                <div className="learning-framework__col learning-framework__col--content">
                    {/* Render the content component */}
                    <div className="learning-framework__item">
                        <Content
                            bodyTextOne="St John Bosco considered there to be four spaces where the elements of education occur."
                            bodyTextTwo="At St John Bosco College, we take an evidence-informed approach to teaching and learning. This learning-framework places that evidence into the following elements of education."
                        />
                    </div>

                    {/* Render the framework components */}
                    <div className="learning-framework__item">
                        <h2 className="text-uppercase">Frameworks</h2>

                        {/* Map over the dataFrameworkContent and render the components */}
                        {data.map((item, index) => (
                            <Framework
                                key={index}
                                borderColor={item.borderColor}
                                headingText={item.headingText}
                                bodyText={item.bodyText}
                            />
                        ))}
                    </div>

                    {/* Render the key components */}
                    <div className="learning-framework__item">
                        <h2 className="text-uppercase">Key</h2>

                        <Key
                            dotOne="blue"
                            dotTwo="green"
                            dotThree="red"
                            dotFour="orange"
                            bodyText="Learning framework"
                        />

                        <Key dotOne="yellow" bodyText="Wellbeing framework" />
                    </div>
                </div>

                <div className="learning-framework__col learning-framework__col--chart">
                    {/* Render the callout component */}
                    <Callout calloutText="Interact with the chart pieces to learn more" />

                    {/* Render the pie chart component */}
                    <PieChart />

                    <InnerText />
                    <OuterText />
                </div>
            </div>
        </div>
    );
};

export default Layout;
