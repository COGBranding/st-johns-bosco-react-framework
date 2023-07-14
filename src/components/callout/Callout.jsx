import React from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const Callout = ({ calloutText }) => {
    return (
        <>
            {calloutText ? (
                <div className="callout">
                    <UseAnimations
                        className="callout__icon"
                        animation={arrowDown}
                        size={24}
                    />
                    {calloutText}
                </div>
            ) : null}
        </>
    );
};

export default Callout;
