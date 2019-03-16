import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import './Home.css';
import './About.css';
import Home from './Home';
import UsStaffing from './UsStaffing';
import About from './About';
import Contact from './Contact';
import ItServices from './ItServices';
import Career from './Career';
import logo from "./imgs/logo.png"
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nvbr" >
            <img className="logo" src={logo} />
            <nav className="nav" >
              <NavLink to="/" exact activeClassName="activeLink" className="link" >HOME</NavLink>
              <NavLink to="/about/:null" activeClassName="activeLink" className="link" >ABOUT</NavLink>
              <NavLink to="/usstaffing" activeClassName="activeLink" className="link" >US STAFFING</NavLink>
              <NavLink to="/itservices" activeClassName="activeLink" className="link" >IT SERVICES</NavLink>
              <NavLink to="/contact" activeClassName="activeLink" className="link" >CONTACT</NavLink>
              <NavLink to="/career" activeClassName="activeLink" className="link" >CAREER</NavLink>
            </nav>
          </div>
          <div className="comp" >
            <Route exact path='/' component={Home} />
            <Route path='/about/:id' component={About} />
            <Route path='/usstaffing' component={UsStaffing} />
            <Route path='/itservices' component={ItServices} />
            <Route path='/contact' component={Contact} />
            <Route path='/career' component={Career} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;