import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = (props) =>{
    return (
        <div className = {`loader-wrapper ${props.classProp}`}>
            <Loader type = 'Grid'
            color = 'white'
            width = {200}
            height = {200} />
        </div>
    )
}

export default Spinner;