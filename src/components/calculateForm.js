import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class CalculateForm extends Component {
    state = {
        age: '',
        height: '',
        height: '',
        gender: '',
    }
    
    calculateHandler = event => {
        console.log(event);
        event.preventDefault();
    }

    render() { 
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="calculatorForm p-3">
                                <form>
                                    <div className="card">
                                    <div className="card-body">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Age your age</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter your age"
                                                        name="age"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Enter Height</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter your height"
                                                        name="height"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Weight</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter weight"
                                                        name="weight"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Select Gender</label>
                                                        <select
                                                            name="gender"
                                                            className="form-control">
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                        <button onClick={this.calculateHandler} className="btn btn-info btn-sm mr-2">Calculate </button>
                                        <button type="reset" className="btn btn-danger btn-sm mr-2">Reset </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default CalculateForm;
