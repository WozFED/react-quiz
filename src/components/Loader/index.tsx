import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderProps } from './interface';


const Spinner = (props: LoaderProps) =>{
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