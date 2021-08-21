import React from 'react'
import './TextSay.css';

const TextSay = (props) => {

    return (
        <React.Fragment>
            {
                <p className="text-say">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default TextSay
