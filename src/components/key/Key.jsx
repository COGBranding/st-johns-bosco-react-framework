import React from "react";

const Key = ({ dotOne, dotTwo, dotThree, dotFour, bodyText }) => {
    return (
        <div className="key">
            <div
                className={`key__dot ${
                    dotOne ? `key__dot--${dotOne}` : "key__dot--transparent"
                }`}
            ></div>
            <div
                className={`key__dot ${
                    dotTwo ? `key__dot--${dotTwo}` : "key__dot--transparent"
                }`}
            ></div>
            <div
                className={`key__dot ${
                    dotThree ? `key__dot--${dotThree}` : "key__dot--transparent"
                }`}
            ></div>
            <div
                className={`key__dot ${
                    dotFour ? `key__dot--${dotFour}` : "key__dot--transparent"
                }`}
            ></div>

            {bodyText ? <p className="key__label">{bodyText}</p> : null}
        </div>
    );
};

export default Key;
