import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { India } from './India';
import { createBrowserHistory } from 'history';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            COVID19 Status
          </a>
          <Link to='/'>Home</Link>
          <Link to='/india'>India</Link>
        </nav>
      </div>
      <Route path='/' exact component={Home}></Route>
      <Route path='/india' exact component={India}></Route>
    </Router>
  );
}

export default App;
