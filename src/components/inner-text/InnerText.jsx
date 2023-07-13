import React from "react";
import { dataInnerText as data } from "../../data/dataInnerText";

const InnerText = () => {
    return (
        <div className="inner-layer">
            InnerText
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`inner-layer__item inner-layer__item--${item.id}`}
                >
                    <div className="inner-layer__item__text">{item.text}</div>
                    <div className="inner-layer__item__icon">{item.icon}</div>
                </div>
            ))}
        </div>
    );
};

export default InnerText;
