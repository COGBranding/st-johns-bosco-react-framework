import React from "react";
import { dataInnerText as data } from "../../data/dataInnerText";

const InnerText = () => {
    return (
        <div className="inner-layer">
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`inner-layer__item inner-layer__item--${item.id}`}
                >
                    <img className="inner-layer__item__text" src={item.text} />
                    <img className="inner-layer__item__icon" src={item.icon} />
                </div>
            ))}
        </div>
    );
};

export default InnerText;
