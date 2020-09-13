import React, { Component } from 'react';
import CalculateForm from './calculateForm';
import Header from './common/header';
import Footer from './common/footer';

class Calculator extends Component {
    state = {}
    
    render() { 
        return (
            <>
                <Header/>
                <CalculateForm />
                <Footer />
            </>
        );
    }
}
 
export default Calculator;
