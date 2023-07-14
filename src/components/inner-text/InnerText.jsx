import React from "react";
import { dataInnerText as data } from "../../data/dataInnerText";

const InnerText = () => {
    return (
        <div className="inner-layer">
            {data.map((item) => (
                <>
                    <img
                        key={item.id}
                        className={`inner-layer__item inner-layer__item--${item.id}`}
                        src={item.text}
                    />
                </>
            ))}
        </div>
    );
};

export default InnerText;
