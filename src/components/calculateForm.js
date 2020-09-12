import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class CalculateForm extends Component {
    state = {
        age: '',
        height: '',
        weight: '',
        gender: '',
    }
    
     handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    submitHandler = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const {age, height, weight, gender} = this.state
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="calculatorForm p-3">
                                <form onSubmit={this.submitHandler}>
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
                                                        value={age}
                                                        onChange={this.handleChange}
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
                                                        value={height}
                                                        onChange={this.handleChange}
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
                                                        value={weight}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Select Gender</label>
                                                        <select
                                                            name="gender"
                                                            value={gender}
                                                            onChange={this.handleChange}
                                                            className="form-control">
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                        <button type="submit" className="btn btn-info btn-sm mr-2">Calculate </button>
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
