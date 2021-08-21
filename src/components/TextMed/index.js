import React from 'react'
import './TextMed.css';

const TextMed = (props) => {

    return (
        <React.Fragment>
            {
                <p className="text-medium">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default TextMed
