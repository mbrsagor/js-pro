import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class CalculateForm extends Component {
    state = {
        age: '',
        height: '',
        weight: '',
        gender: '',
    }
    
    calculateHandler = event => {
        console.log(state);
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
                        <Col lg={4}>
                            <div className="sidebar p-3">
                                <div className="card p-2">
                                    <h5 className="card-title">Total Calories Result</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Maintenance
                                            <span className="badge badge-primary badge-pill">1478</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            CALORIES / DAY
                                            <span className="badge badge-primary badge-pill">1183</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            CALORIES / DAY
                                            <span className="badge badge-primary badge-pill">887</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge badge-primary badge-pill">14</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default CalculateForm;
