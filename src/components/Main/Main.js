import React from 'react';
import {nanoid} from "nanoid";
import {CuretSVG, EllipseSVG, PlusSVG} from "../../asstets/RactangulareSVG";
import Accordion from "../Accordion/Accordion";
import s from "./Main.module.css"
import AccordionItem from "../AccordionItem/AccordionItem";


const GraphsID_1 = nanoid()
const GraphsID_2 = nanoid()
const GraphsID_3 = nanoid()

const AllGraphs = [
    {id: GraphsID_1, title: "User saved graphs"},
    {id: GraphsID_2, title: "Material design presrts"},
    {id: GraphsID_3, title: "iOS presets"}
]

const AllGraphsRows = {
    [GraphsID_1]: [{
        id: nanoid(),
        title: '79.0,43.104',
        image: <EllipseSVG/>
    },
        {
            id: nanoid(),
            title: '4.0,5',
            image: <EllipseSVG/>
        },
        {
            id: nanoid(),
            title: '55.0.15',
            image: <EllipseSVG/>
        }],
    [GraphsID_2]: [{
        id: nanoid(),
        title: '66.0,43.104',
        image: <EllipseSVG/>
    },
        {
            id: nanoid(),
            title: '5.0,5',
            image: <EllipseSVG/>
        },
        {
            id: nanoid(),
            title: '999.0.15',
            image: <EllipseSVG/>
        }],
    [GraphsID_3]: [{
        id: nanoid(),
        title: '79.0,43.104',
        image: <EllipseSVG/>
    },
        {
            id: nanoid(),
            title: '48484848484.0,5',
            image: <EllipseSVG/>
        },
        {
            id: nanoid(),
            title: '100000.0.15',
            image: <EllipseSVG/>
        }
    ]
}

function Main() {

    return (
        <div className={s.container}>
            <div className={s.wrapper}>

                <div className={s.graphContainer}>
                    <div className={s.graphHeader}>
                        <span>Saved graphs</span>
                        <PlusSVG/>
                    </div>


                    {AllGraphs.map(i => {
                        return <div>

                            <Accordion
                                title={i.title}
                            >
                                {AllGraphsRows[i.id].map(graph => {
                                    return (
                                        <AccordionItem title={graph.title} img={graph.image}/>
                                    )
                                })}
                            </Accordion>


                        </div>
                    })}


                </div>

            </div>
        </div>
    )
}

export default Main;