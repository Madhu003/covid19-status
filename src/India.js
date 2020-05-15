import React from 'react';
import Service from './service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import NumberFormat from 'react-number-format';
import { Line } from 'react-chartjs-2';


export class India extends React.Component {
    constructor() {
        super();
        this.state = {
            countryCases: [],
            globalCases: {}
        };
    }


    componentDidMount() {
        Service.getSummaryOfIndia()
            .then(res => {
                console.log(res);
                this.setState({
                    summary: res.data
                });
            });

        Service.getStateWiseSummary()
            .then(res => {
                this.setState({
                    stateWiseSummary: res.data
                });
                console.log(res);
            });
    }

    render() {

        return (<div>
            <Container style={{ marginTop: "10px" }}>
                <br></br>
                <Row style={{ textAlign: "left" }}>
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                    <Col xs="8">
                        <h2>Status of India</h2>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: "10px" }}>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                    <Col md="8">
                        {this.state.summary &&
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="4" sm="12">
                                        <Card className="text-center" bg="warning" text="white">
                                            <Card.Header>Confirmed</Card.Header>
                                            <Card.Body>
                                                <Card.Title>
                                                    <NumberFormat
                                                        value={this.state.summary.confirmed.value || 0}
                                                        displayType={'text'} thousandSeparator={true} />
                                                </Card.Title>
                                                <Card.Text>
                                                    Cases
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs lg="4" sm="12">
                                        <Card className="text-center" bg="success" text="white">
                                            <Card.Header>Recovered</Card.Header>
                                            <Card.Body>
                                                <Card.Title>
                                                    <NumberFormat
                                                        value={this.state.summary.recovered.value || 0}
                                                        displayType={'text'} thousandSeparator={true} />
                                                </Card.Title>
                                                <Card.Text>
                                                    Cases
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs lg="4" sm="12">
                                        <Card className="text-center" bg="danger" text="white">
                                            <Card.Header>Deaths</Card.Header>
                                            <Card.Body>
                                                <Card.Title>
                                                    <NumberFormat
                                                        value={this.state.summary.deaths.value || 0}
                                                        displayType={'text'} thousandSeparator={true} />
                                                </Card.Title>
                                                <Card.Text>
                                                    Cases
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        }
                    </Col>
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                </Row>
            </Container>
            {this.state.stateWiseSummary &&
                <Container>
                    <br></br>
                    <Row>
                        <Col lg={2}>&nbsp;</Col>
                        <Col lg={8}>
                            <Table bordered striped hover responsive="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style={{ textAlign: "left" }}>States</th>
                                        <th>Confirmed</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.stateWiseSummary.map((item, index) => {
                                        if (!item.name) return null;
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td style={{ textAlign: "left" }}>{item.name}</td>
                                            <td style={{ textAlign: "right" }}>
                                                <NumberFormat value={item.cases}
                                                    displayType={'text'} thousandSeparator={true} />
                                            </td>
                                            <td style={{ textAlign: "right" }}>
                                                <NumberFormat value={item.recovered}
                                                    displayType={'text'} thousandSeparator={true} />
                                            </td>
                                            <td style={{ textAlign: "right" }}>
                                                <NumberFormat value={item.deaths}
                                                    displayType={'text'} thousandSeparator={true} />
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={2}>&nbsp;</Col>
                    </Row>
                </Container>
            }
        </div>
        );
    }
}