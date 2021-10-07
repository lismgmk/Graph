import React, {useState} from "react";
import s from "./AccordionItem.module.css";
import {AdjustSVG} from "../../asstets/AdgjustVG";

function AccordionItem(props) {
    const [down, setDown] = useState(false);

    return (
        <div
            className={s.wrapperItem}
            onMouseOver={() => {
                setDown(true)
            }}
            onMouseLeave={() => {
                setDown(false)
            }}
        >
            <div className={s.wrapperTitle}>
                {props.img}
                <span>
                    {props.title}
                </span>
            </div>
            {down && <div
                className={s.buttonClass}>
                <AdjustSVG/>
            </div>}
        </div>
    );
}

export default AccordionItem;



