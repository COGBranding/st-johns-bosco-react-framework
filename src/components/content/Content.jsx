import React from "react";

const Content = ({ bodyTextOne, bodyTextTwo }) => {
    return (
        <div className="content">
            {bodyTextOne ? <p>{bodyTextOne}</p> : ""}
            {bodyTextTwo ? <p>{bodyTextTwo}</p> : ""}
        </div>
    );
};

export default Content;
