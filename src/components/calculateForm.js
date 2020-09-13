import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Layout from './common/layout';
import Output from './output';


class CalculateForm extends Component {
    state = {
        age: '',
        height: '',
        weight: '',
        gender: '',
        goal_weight: '',
        activity_lavel: '',
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
        const {age, height, weight, activity_lavel, goal_weight, gender} = this.state
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
                                                    <label htmlFor="age">General Height</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter general height"
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
                                                    <label htmlFor="age">Current Weight</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter current weight"
                                                        name="weight"
                                                        value={weight}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="age">Activity Level</label>
                                                        <select
                                                            name="activity_lavel"
                                                            value={activity_lavel}
                                                            onChange={this.handleChange}
                                                            className="form-control">
                                                        <option value={1}>No Execurse</option>
                                                        <option value={2}>2 trmes vcch</option>
                                                        <option value={3}>3-4 trmes</option>
                                                        <option value={4}>5 trmes</option>
                                                        <option value={5}>Arntect</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="goal_weight">Goal Weight</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter goal weight"
                                                        name="goal_weight"
                                                        value={goal_weight}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="general">Gender</label>
                                                    <select
                                                            name="gender"
                                                            value={gender}
                                                            onChange={this.handleChange}
                                                            className="form-control">
                                                        <option value={1}>Male</option>
                                                        <option value={2}>Female</option>
                                                        <option value={3}>Other</option>
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
                            <Output />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default CalculateForm;
