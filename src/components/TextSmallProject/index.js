import React from 'react'
import './TextSmallProject.css';

const TextSmallProject = (props) => {

    return (
        <React.Fragment>
            {
                <p className="text-small-project">{props.value}</p>
            }
        </React.Fragment>
    )
}

export default TextSmallProject
