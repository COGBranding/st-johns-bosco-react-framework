import React from "react";

const Callout = ({ calloutText }) => {
    return (
        <>{calloutText ? <div className="callout">{calloutText}</div> : null}</>
    );
};

export default Callout;
