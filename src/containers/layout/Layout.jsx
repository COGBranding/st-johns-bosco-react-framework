import React from "react";
import { Content, Framework } from "../../components";

const Layout = () => {
    // Define the frameworkContent dataset
    const frameworkContent = [
        {
            borderColor: "blue",
            headingText: "The home",
            bodyText: "Where students know they belong",
        },
        {
            borderColor: "green",
            headingText: "The school",
            bodyText: "Where formal learning occurs",
        },
        {
            borderColor: "red",
            headingText: "The playground",
            bodyText: "Where the community celebrates together",
        },
        {
            borderColor: "orange",
            headingText: "The church",
            bodyText: "Where reflection occurs",
        },
    ];

    return (
        <div className="section learning-framework">
            <div className="row learning-framework__container">
                <div className="learning-framework__col learning-framework__col--content">
                    {/* Render the content component */}
                    <Content
                        bodyTextOne="St John Bosco considered there to be four spaces where the elements of education occur."
                        bodyTextTwo="At St John Bosco College, we take an evidence-informed approach to teaching and learning. This learning-framework places that evidence into the following elements of education."
                    />

                    {/* Render the framework components */}
                    <div className="learning-framework__item">
                        <h2 class="text-uppercase">Frameworks</h2>

                        {frameworkContent.map((item, index) => (
                            <Framework
                                key={index}
                                borderColor={item.borderColor}
                                headingText={item.headingText}
                                bodyText={item.bodyText}
                            />
                        ))}
                    </div>

                    {/* Render the key components */}
                    <h2 className="text-uppercase">Key</h2>
                </div>

                <div className="learning-framework__col learning-framework__col--chart"></div>
            </div>
        </div>
    );
};

export default Layout;
