import React from "react";
import { dataOuterText as data } from "../../data/dataOuterText";

const OuterText = () => {
    return (
        <div className="layer outer-layer">
            {data.map((item) => (
                <div key={item.id}>
                    <img
                        className={`layer__item outer-layer__item outer-layer__item--${item.id}`}
                        src={item.text}
                        alt={`text-${item.id}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default OuterText;
