import React from 'react'
import './TextSmall.css';

const TextSmall = (props) => {

    return (
        <React.Fragment>
            {
                <p className="text-small">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default TextSmall
