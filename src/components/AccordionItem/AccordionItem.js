import React, {useState, useRef} from "react";
import "./AccordionItem.module..css";
import {AdjustSVG} from "../../asstets/RactangulareSVG";

function AccordionItem(props) {
    const [down, setDown] = useState(false);

    return (
        <div className="accordion__section">
            <div
                onMouseOver={() => {
                    setDown(true)
                }}
                onMouseLeave={() => {
                    setDown(false)
                }}
                className={`accordion`}
            >
                {props.img}
                <span>
                    {props.title}
                </span>
                {down && <div
                    className='buttonClass'>
                    <AdjustSVG/>
                </div>}
            </div>


        </div>
    );
}

export default AccordionItem;



