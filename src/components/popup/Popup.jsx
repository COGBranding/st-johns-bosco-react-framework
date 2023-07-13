import React from "react";
import { GrClose } from "react-icons/gr";

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
    return (
        <div className={`popup ${isOpen ? "open" : ""} popup--${borderColor}`}>
            <div className="popup__head">
                <div className="popup__head__content">
                    {framework ? (
                        <p className="text-uppercase">{framework}</p>
                    ) : null}

                    <p className="text-uppercase">//</p>

                    {frameworkCategory ? (
                        <p className="text-uppercase">{frameworkCategory}</p>
                    ) : null}
                </div>

                <GrClose
                    className="popup__head__close-icon"
                    onClick={onClose}
                />
            </div>

            <div className="popup__body">
                <div className="popup__body__heading">
                    {heading ? (
                        <h2 className="popup__heading">{heading}</h2>
                    ) : null}

                    {subheading ? (
                        <p className="popup__subheading">{subheading}</p>
                    ) : null}
                </div>

                <div className="popup__body__content">
                    {/* Render the teacher heading and list teacherListItems */}
                    {teacherListItems ? (
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
                    ) : null}

                    {/* Render the learner heading and list learnerListItems */}
                    {learnerListItems ? (
                        <>
                            <h4 className="popup__subheading--sm">
                                The Bosco teacher:
                            </h4>

                            <ul className="popup__list">
                                {learnerListItems.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}

                    {/* Render the principle heading and principleListItems */}
                    {principleText || principleListItems ? (
                        <>
                            <h4 className="popup__subheading--sm">Principle</h4>

                            <ul className="popup__list">
                                {principleListItems.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Popup;
