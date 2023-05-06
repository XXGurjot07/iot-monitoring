import React from 'react'
import "./styles.css"

const GreenLight = ({Lno}) => {
    return (
        <>
            <div className='light green' id={Lno}>
            <label>{Lno}</label>
            </div>
        </>
    );
}

export default GreenLight;