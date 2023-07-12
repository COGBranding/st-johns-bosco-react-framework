import React from "react";

const Framework = ({ borderColor, headingText, bodyText }) => {
    const className = `framework framework--${borderColor}`;

    return (
        <div className={className}>
            {headingText ? (
                <h4 className="framework__heading">{headingText}</h4>
            ) : null}

            {bodyText ? <p className="framework__body">{bodyText}</p> : null}
        </div>
    );
};

export default Framework;
