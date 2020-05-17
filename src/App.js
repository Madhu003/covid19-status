import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Home } from './Home';
import { India } from './India';

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
                        <Nav.Link href="/india">India</Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="home" />
                    )} />
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/india" exact component={India}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
