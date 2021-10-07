import React, {useState, useRef} from "react";
import {CuretSVG} from "../../asstets/CuretSVG";
import s from "./Accordion.module.css"

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("0");

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
        <div className={s.accordionSection}>
            <button className={`${s.accordion}`} onClick={toggleAccordion}>
                <CuretSVG deg={`${setRotate}`}/>
                <p className={s.accordionTitle}>{props.title}</p>
            </button>
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className={s.accordionContent}
            >

                {props.children}
            </div>
        </div>
    );
}

export default Accordion;



