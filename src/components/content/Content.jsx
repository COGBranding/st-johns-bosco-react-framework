import React from "react";

const Content = ({ bodyTextOne, bodyTextTwo }) => {
    return (
        <div className="content">
            {bodyTextOne ? <p>{bodyTextOne}</p> : null}
            {bodyTextTwo ? <p>{bodyTextTwo}</p> : null}
        </div>
    );
};

export default Content;
