import React from "react";
import s from "./icon.module.css"

export const CuretSVG = (props = 180) => {
    return <div className={s.icon}>
        <svg style={{
            transform: `rotate(${props.deg}deg)`,
            fill: 'rgba(0, 0, 0, 0.3)'
        }}
             width="4" height="6" viewBox="0 0 4 6" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 3L0 0V6L4 3Z"/>
        </svg>
    </div>
}
