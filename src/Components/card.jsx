import React from 'react'
import "./styles.css"
import Grid from './grid';

const Card = ({ horizontal, vertical, lightId }) => {
    const cardClass = horizontal + "-" + vertical;

    return (
        <div className='app-card design2' id={cardClass}>
            <Grid custom={cardClass} lightId={lightId} />
        </div>
    );
}

export default Card;