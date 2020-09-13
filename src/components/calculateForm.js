import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Layout from './common/layout';
import Calculate from './calculate';
import Output from './output';


class CalculateForm extends Component {

    render() {
        
        return (
            <>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Calculate />
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
