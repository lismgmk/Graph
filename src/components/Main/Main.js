import React from 'react';
import {nanoid} from "nanoid";
import Accordion from "../Accordion/Accordion";
import s from "./Main.module.css"
import AccordionItem from "../AccordionItem/AccordionItem";
import {PlusSVG} from "../../asstets/PlusSVG";
import {AllGraphs, AllGraphsRows} from "../../db_custom/db";

function Main() {

    const getAllGraphs = AllGraphs.map(i => {
        return <div
            key={nanoid()}
        >
            <Accordion
                title={i.title}
            >
                {AllGraphsRows[i.id].map(graph => {
                    return (
                        <div key={nanoid()}>
                            <AccordionItem title={graph.title} img={graph.image}/>
                        </div>
                    )
                })}
            </Accordion>
        </div>
    })

    return (
        <div className={s.container}>
            <div className={s.wrapper}>

                <div className={s.graphContainer}>
                    <div className={s.graphHeader}>
                        <span>Saved graphs</span>
                        <div className={s.buttonContainer}>
                            <PlusSVG/>
                        </div>
                    </div>
                    {getAllGraphs}
                </div>
            </div>
        </div>
    )
}

export default Main;