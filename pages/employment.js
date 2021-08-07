import React from 'react'
import { Fragment } from 'react';
import '../styles/App.module.css';
import EmploymentForm from '../components/EmploymentForm.js';

function Employment (){
    return (
        <Fragment>
            <h1 className="employment">Employment</h1>
            <EmploymentForm/>
        </Fragment>
    ); 
}

export default Employment