import React from "react";
import { Content } from "../../components";

const Layout = () => {
    return (
        <div className="section framework">
            <div className="row framework__container">
                <div className="framework__col framework__col--content">
                    {/* Render the content component */}
                    <Content
                        bodyTextOne="St John Bosco considered there to be four spaces where the elements of education occur."
                        bodyTextTwo="At St John Bosco College, we take an evidence-informed approach to teaching and learning. This framework places that evidence into the following elements of education."
                    />
                </div>

                <div className="framework__col framework__col--chart"></div>
            </div>
        </div>
    );
};

export default Layout;
