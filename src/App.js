import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { India } from './India';
import { createBrowserHistory } from 'history';

function App() {
    return (
        <div className='App'>
            <Router history={createBrowserHistory()}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">COVID19 Status</a>
                    <Nav activeKey="/active">
                        <Nav.Item>
                            <Link to='/home'>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/india'>India</Link>
                        </Nav.Item>
                    </Nav>
                </nav>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/' exact component={Home}></Route>
                <Route path='/india' exact component={India}></Route>
            </Router>
        </div>

    );
}

export default App;
