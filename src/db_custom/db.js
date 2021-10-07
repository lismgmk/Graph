import React from 'react';
import {nanoid} from "nanoid";
import {EllipseSVG} from "../asstets/EllipseSVG";

const GraphsID_1 = nanoid()
const GraphsID_2 = nanoid()
const GraphsID_3 = nanoid()

export const AllGraphs = [
    {id: GraphsID_1, title: "User saved graphs"},
    {id: GraphsID_2, title: "Material design presrts"},
    {id: GraphsID_3, title: "iOS presets"}
]

export const AllGraphsRows = {
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
            title: '4848.0,5',
            image: <EllipseSVG/>
        },
        {
            id: nanoid(),
            title: '100.0.15',
            image: <EllipseSVG/>
        }
    ]
}
