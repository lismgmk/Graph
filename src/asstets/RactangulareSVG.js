import React from "react";
import s from "./svgStyle.module.css";



export const EllipseSVG = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="16" height="16" viewBox="0 0 16 16" fill="red" stroke="black"
        >
            <path d="M2 14C10 14 6 2 14 2"  stroke-opacity="0.8" stroke-dasharray="2 1"/>
        </svg>
    </>

}


export const CuretSVG = (props= 180) => {
    return <>
        <svg style={{
            transform: `rotate(${props.deg}deg)`}
        }
             width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 3L0 0V6L4 3Z" fill="black" fill-opacity="0.3"/>
        </svg>
    </>



}

export const PlusSVG = () => {
    return <>
        <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 5.5V0.5H6.5V5.5H11.5V6.5H6.5V11.5H5.5V6.5H0.5V5.5H5.5Z" fill="black" fill-opacity="0.8"/>

        </svg>
    </>

}
export const AdjustSVG = () => {
    return <>
        <svg

            width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.05V9H13V16.05C14.1411 16.2816 15 17.2905 15 18.5C15 19.7095 14.1411 20.7184 13 20.95V23H12V20.95C10.8589 20.7184 10 19.7095 10 18.5C10 17.2905 10.8589 16.2816 12 16.05ZM14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5ZM19 23H20V15.95C21.1411 15.7184 22 14.7095 22 13.5C22 12.2905 21.1411 11.2816 20 11.05V9H19V11.05C17.8589 11.2816 17 12.2905 17 13.5C17 14.7095 17.8589 15.7184 19 15.95V23ZM21 13.5C21 12.6716 20.3284 12 19.5 12C18.6716 12 18 12.6716 18 13.5C18 14.3284 18.6716 15 19.5 15C20.3284 15 21 14.3284 21 13.5Z" fill="black" fill-opacity="0.8"/>

        </svg>
    </>

}
