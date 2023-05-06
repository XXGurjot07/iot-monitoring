import React from 'react'

const YellowLight = ({Lno}) => {
    return (
        <div className='light yellow' id={Lno}>
            <label>{Lno}</label>
        </div>
    );
}

export default YellowLight;