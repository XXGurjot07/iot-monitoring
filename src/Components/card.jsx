import React from 'react'
import "./styles.css"
import Grid from './grid';

const Card = ({ horizontal, vertical, lightId, DeviceName }) => {
    const cardClass = horizontal + "-" + vertical;
    var align;
    horizontal === "left" ? align = "left-align text" : align = "right-align text";

    return (
        <div className='app-card design2' id={cardClass}>
            <h3 className={align}>{DeviceName}</h3>
            <Grid custom={cardClass} lightId={lightId} />
        </div>
    );
}

export default Card;