import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from './Home';

function App() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">COVID19 Status</a>
                <Nav activeKey="/active">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/link1">Link1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/link2">Link2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
            <Router>
                <Redirect from="/" to="/home" />
                <Route path="/home" exact={true} component={Home}>
                </Route>
                <Route path="/link1" exact={true}>
                    <h1>Link1</h1>
                </Route>
                <Route path="/link2" exact={true}>
                    <h1>Link2</h1>
                </Route>
            </Router>
        </div>
    );
}

export default App;
