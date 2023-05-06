import React from 'react'

import "./styles.css"
import GreenLight from './green-light';
import YellowLight from './yellow-light';
import RedLight from './red-light';

const Grid = ({ custom, lightId }) => {
    const customId = custom + "-grid";
    const redId = "R" + lightId;
    const greenId = "G" + lightId;
    const yellowId = "Y" + lightId;

    return (
        <div className='card-grid' id={customId}>
            <GreenLight Lno={greenId} />
            <YellowLight Lno={yellowId} />
            <RedLight Lno={redId} />
        </div>
    );
}

export default Grid;