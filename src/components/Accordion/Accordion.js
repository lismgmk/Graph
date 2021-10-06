import React, { useState, useRef } from "react";

import "./Accordion.css";
import {CuretSVG} from "../../asstets/RactangulareSVG";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "0" : "90"
        );
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <CuretSVG deg={`${setRotate}`}/>
                <p className="accordion__title">{props.title}</p>
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >

                {props.children}
            </div>
        </div>
    );
}

export default Accordion;



