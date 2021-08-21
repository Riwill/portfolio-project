import React from 'react'
import './TextBig.css';

const TextBig = (props) => {

    return (
        <React.Fragment>
            {
                <p className="text-big">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default TextBig
