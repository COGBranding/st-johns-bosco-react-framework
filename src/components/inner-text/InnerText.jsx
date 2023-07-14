import React from "react";
import { dataInnerText as data } from "../../data/dataInnerText";

const InnerText = () => {
    return (
        <div className="layer inner-layer">
            {data.map((item) => (
                <div key={item.id}>
                    <img
                        className={`layer__item inner-layer__item inner-layer__item--${item.id}`}
                        src={item.text}
                        alt={`text-${item.id}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default InnerText;
