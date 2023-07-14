import React, { useState, useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { Overlay } from "../index";

const Popup = ({
    isOpen,
    onClose,
    borderColor,
    framework,
    frameworkCategory,
    heading,
    subheading,
    teacherListItems,
    learnerListItems,
    principleText,
    principleListItems,
}) => {
    const [isCloseIconFocused, setIsCloseIconFocused] = useState(false);
    const closeIconRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && isCloseIconFocused) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            const handleFocus = () => setIsCloseIconFocused(true);
            const handleBlur = () => setIsCloseIconFocused(false);

            const closeIconElement = closeIconRef.current;
            closeIconElement.addEventListener("focus", handleFocus);
            closeIconElement.addEventListener("blur", handleBlur);

            return () => {
                closeIconElement.removeEventListener("focus", handleFocus);
                closeIconElement.removeEventListener("blur", handleBlur);
            };
        }
    }, [isOpen]);

    if (!isOpen) {
        return null; // Render nothing if the popup is not open
    }

    return (
        <>
            <Overlay />

            <div
                className={`popup ${
                    isOpen ? "open" : ""
                } popup--${borderColor}`}
                onKeyDown={handleKeyDown}
            >
                <div className="popup__head">
                    <div className="popup__head__content">
                        {framework && (
                            <p className="text-uppercase">{framework}</p>
                        )}

                        {frameworkCategory && (
                            <>
                                <p className="text-uppercase">//</p>
                                <p className="text-uppercase">
                                    {frameworkCategory}
                                </p>
                            </>
                        )}
                    </div>

                    <div
                        className="popup__head__close-icon__wrapper"
                        onClick={onClose}
                        tabIndex={0}
                        ref={closeIconRef}
                    >
                        <GrClose className="popup__head__close-icon" />
                    </div>
                </div>

                <div className="popup__body">
                    <div className="popup__body__heading">
                        {heading && (
                            <h2 className="popup__heading">{heading}</h2>
                        )}

                        {subheading && (
                            <p className="popup__subheading">{subheading}</p>
                        )}
                    </div>

                    <div className="popup__body__content">
                        {/* Render the teacher heading and list teacherListItems */}
                        {teacherListItems && (
                            <>
                                <h4 className="popup__subheading--sm">
                                    The Bosco teacher:
                                </h4>

                                <ul className="popup__list">
                                    {teacherListItems.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Render the learner heading and list learnerListItems */}
                        {learnerListItems && (
                            <>
                                <h4 className="popup__subheading--sm">
                                    The Bosco learner:
                                </h4>

                                <ul className="popup__list">
                                    {learnerListItems.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Render the principle heading and principleListItems */}
                        {(principleText || principleListItems) && (
                            <>
                                <h4 className="popup__subheading--sm">
                                    Principle
                                </h4>

                                {principleText && <p>{principleText}</p>}

                                <ul className="popup__list">
                                    {principleListItems.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
