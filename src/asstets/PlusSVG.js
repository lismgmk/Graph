import React from "react";
import s from "./icon.module.css"

export const PlusSVG = () => {
    return <div className={`${s.iconActive} ${s.icon}`}>
        <svg
            width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.5 15.5V10.5H16.5V15.5H21.5V16.5H16.5V21.5H15.5V16.5H10.5V15.5H15.5Z"/>
        </svg>
    </div>
}
