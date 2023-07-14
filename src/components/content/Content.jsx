import React from "react";

const Content = ({ bodyText }) => {
    return (
        <div className="content">
            {bodyText.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    );
};

export default Content;
