import React from 'react';
import Service from './serivice';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NumberFormat from 'react-number-format';
import { Line } from 'react-chartjs-2';


export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            countryCases: [],
            globalCases: {}
        };
    }


    componentDidMount() {
        Service.getSummary()
            .then(res => {
                console.log(res);
                this.setState({
                    countryCases: res.data.Countries,
                    globalCases: res.data.Global
                });
            });


        Service.getDailyReport()
            .then(res => {
                this.setState({
                    dailyReport: res.data
                });
                console.log(res);

            });
    }

    render() {

        return (<div>

            <Container>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                    <Col md="8">
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col xs lg="4">
                                    <Card className="text-center" bg="warning" text="white">
                                        <Card.Header>Confirmed</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <NumberFormat
                                                    value={this.state.globalCases.TotalConfirmed || 0}
                                                    displayType={'text'} thousandSeparator={true} />
                                            </Card.Title>
                                            <Card.Text>
                                                Cases
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs lg="4">
                                    <Card className="text-center" bg="success" text="white">
                                        <Card.Header>Recovered</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <NumberFormat
                                                    value={this.state.globalCases.TotalRecovered || 0}
                                                    displayType={'text'} thousandSeparator={true} />
                                            </Card.Title>
                                            <Card.Text>
                                                Cases
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs lg="4">
                                    <Card className="text-center" bg="danger" text="white">
                                        <Card.Header>Deaths</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <NumberFormat
                                                    value={this.state.globalCases.TotalDeaths || 0}
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
                    </Col>
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                </Row>
            </Container>
            {this.state.dailyReport &&
                <Container>
                    <br></br>
                    <Row>
                        <Col lg={2}>&nbsp;</Col>
                        <Col lg={8}>
                            <Line
                                data={{
                                    labels: this.state.dailyReport.map(item => item.reportDate),
                                    datasets: [{
                                        data: this.state.dailyReport
                                            .map(item => item.totalConfirmed),
                                        label: 'Confirmed',
                                        borderColor: 'rgb(251, 194, 55)',
                                        backgroundColor: '#fbc23785',
                                        fill: true,
                                    }, {
                                        data: this.state.dailyReport
                                            .map(item => item.totalRecovered),
                                        label: 'Recovered',
                                        borderColor: '#47a442',
                                        backgroundColor: '#47a442',
                                        fill: true,
                                    },
                                    {
                                        data: this.state.dailyReport
                                            .map(item => item.deaths.total),
                                        label: 'Deaths',
                                        borderColor: 'red',
                                        backgroundColor: 'red',
                                        fill: true,
                                    }
                                    ]
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            }
            {/* <Container>
                <br></br>
                <Row>
                    <Col lg={3}>&nbsp;</Col>
                    <Col lg={6}>
                        <Table bordered striped hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th style={{ textAlign: "left" }}>Country Name</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.countryCases.map((item, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td style={{ textAlign: "left" }}>{item.Country}</td>
                                        <td style={{ textAlign: "right" }}>
                                            {item.TotalConfirmed}
                                            <p style={{ margin: "0px" }}>
                                                <small>
                                                    {item.NewConfirmed} &uarr;
                                                </small>
                                            </p>
                                        </td>
                                        <td style={{ textAlign: "right" }}>
                                            {item.TotalRecovered}
                                            <p style={{ margin: "0px" }}>
                                                <small>
                                                    {item.NewRecovered} &uarr;
                                                </small>
                                            </p>
                                        </td>
                                        <td style={{ textAlign: "right" }}>
                                            {item.TotalDeaths}
                                            <p style={{ margin: "0px" }}>
                                                <small>
                                                    {item.NewDeaths} &uarr;
                                                </small>
                                            </p>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={3}>&nbsp;</Col>
                </Row>
            </Container> */}
        </div>
        );
    }
}