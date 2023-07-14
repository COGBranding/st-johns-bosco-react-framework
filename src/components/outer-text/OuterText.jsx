import React from "react";
import { dataOuterText as data } from "../../data/dataOuterText";

const OuterText = () => {
    return (
        <div className="layer outer-layer">
            {data.map((item) => (
                <>
                    <img
                        key={item.id}
                        className={`layer__item outer-layer__item outer-layer__item--${item.id}`}
                        src={item.text}
                    />
                </>
            ))}
        </div>
    );
};

export default OuterText;
