import { useEffect } from "react";
import ReactDOM from "react-dom";

const Overlay = () => {
    const bodyOverlay = document.createElement("div");
    bodyOverlay.classList.add("overlay");

    useEffect(() => {
        document.body.appendChild(bodyOverlay);

        return () => {
            document.body.removeChild(bodyOverlay);
        };
    });

    return ReactDOM.createPortal(null, bodyOverlay);
};

export default Overlay;
