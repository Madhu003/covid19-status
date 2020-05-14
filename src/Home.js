import React from 'react';
import Service from './serivice';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                        <Container style={{ border: "1px solid #cfccca" }}>
                            <Row className="justify-content-md-center">
                                <Col xs lg="4" style={{ borderRight: "1px solid #cfccca" }}>
                                    <h3>{this.state.globalCases.TotalConfirmed || ""}</h3>
                                    <h6>Confirmed Cases</h6>
                                </Col>
                                <Col xs lg="4" style={{ borderRight: "1px solid #cfccca" }}>
                                    <h3>{this.state.globalCases.TotalRecovered || ""}</h3>
                                    <h6>Recovered Cases</h6>
                                </Col>
                                <Col xs lg="4">
                                    <h3>{this.state.globalCases.TotalDeaths || ""}</h3>
                                    <h6>Deaths</h6>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs lg="2">
                        &nbsp;
                    </Col>
                </Row>
            </Container>
            <Container>
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
            </Container>
        </div>
        );
    }
}