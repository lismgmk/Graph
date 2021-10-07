import React from "react";
import s from "./icon.module.css"

export const EllipseSVG = () => {
    return <div className={s.icon}>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="16" height="16" viewBox="0 0 16 16" stroke="black"
        >
            <path d="M2 14C10 14 6 2 14 2"/>
        </svg>
    </div>
}

