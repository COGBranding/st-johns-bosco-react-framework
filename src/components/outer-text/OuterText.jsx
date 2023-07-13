import React from "react";
import { dataOuterText as data } from "../../data/dataOuterText";

const OuterText = () => {
    return (
        <div className="outer-layer">
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`outer-layer__item outer-layer__item--${item.id}`}
                >
                    <img className="outer-layer__item__text" src={item.text} />
                </div>
            ))}
        </div>
    );
};

export default OuterText;
