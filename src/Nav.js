import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import logo from "./imgs/logo.png"


export default class Nav extends Component {
    render() {
        return (
            <Router>
                <div className="nav">
                    <img className="logo" src={logo} />
                    <nav className="nav" >
                        <NavLink to="/" exact activeClassName="activeLink" className="link" >HOME</NavLink>
                        <NavLink to="/about" activeClassName="activeLink" className="link" >ABOUT</NavLink>
                        <NavLink to="/usstaffing" activeClassName="activeLink" className="link" >US STAFFING</NavLink>
                        <NavLink to="/itservices" activeClassName="activeLink" className="link" >IT SERVICES</NavLink>
                        <NavLink to="/contact" activeClassName="activeLink" className="link" >CONTACT</NavLink>
                        <NavLink to="/career" activeClassName="activeLink" className="link" >CAREER</NavLink>
                    </nav>
                </div>
            </Router>
        );
    }
}