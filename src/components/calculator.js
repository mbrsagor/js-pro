import React, { Component } from 'react';
import CalculateForm from './calculateForm';
import Header from './common/header';

class Calculator extends Component {
    state = {}
    
    render() { 
        return (
            <>
                <Header/>
                < CalculateForm />
            </>
        );
    }
}
 
export default Calculator;
