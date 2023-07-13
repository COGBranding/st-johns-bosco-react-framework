import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";

const Callout = ({ calloutText }) => {
    return (
        <>
            {calloutText ? (
                <div className="callout">
                    <BsHandIndexThumb className="callout__icon" /> {calloutText}
                </div>
            ) : null}
        </>
    );
};

export default Callout;
