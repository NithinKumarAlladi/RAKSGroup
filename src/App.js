import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import './Home.css';
import './About.css';
import './UsStaffing.css';
import './ItServices.css';
import './career.css';
import './Contact.css';
import Home from './Home';
import UsStaffing from './UsStaffing';
import About from './About';
import Contact from './Contact';
import ItServices from './ItServices';
import Career from './Career';
import logo from "./imgs/logo.png";
import glassdoor from './imgs/glassdoor.svg';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nvbr" id="nvbr">
            <img className="logo" src={logo} />
            <nav className="nav" id="nav">
              <NavLink to="/" exact activeClassName="activeLink" className="link" >HOME</NavLink>
              <NavLink to="/about" activeClassName="activeLink" className="link" >ABOUT US</NavLink>
              <NavLink to="/usstaffing" activeClassName="activeLink" className="link" >US STAFFING</NavLink>
              <NavLink to="/itservices" activeClassName="activeLink" className="link" >IT SERVICES</NavLink>
              <NavLink to="/career" activeClassName="activeLink" className="link" >CAREER</NavLink>
              <NavLink to="/contact" activeClassName="activeLink" className="link" >CONTACT</NavLink>
            </nav>
          </div>
          <div className="comp" >
            <Route exact path='/' component={Home} />
            <Route path='/about/:id?' component={About} />
            <Route path='/usstaffing' component={UsStaffing} />
            <Route path='/itservices/:id?' component={ItServices} />
            <Route path='/contact' component={Contact} />
            <Route path='/career' component={Career} />
          </div>
          <div className="endDiv" >
            <div className="endInnerDiv" >
              <div className="endLogoDiv" >
                <img className="endLogo" src={logo} />
                <p className="endAddress" > Address : 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030.<br /> <br />Phone : +1 571-455-7257 <br /><br /> <a className="mailtoHref" href="mailto:info@raksgroup.com" >info@raksgroup.com</a></p>
              </div>
              <div>
                <p className="endLinksH" >NAVIGATE</p>
                <p className="endLink" ><NavLink to="/" exact className="endLink" >HOME</NavLink></p>
                <p className="endLink" ><NavLink to="/career" className="endLink" >CAREER</NavLink></p>
                <p className="endLink" ><NavLink to="/contact" className="endLink" >CONTACT</NavLink></p>
              </div>
              <div>
                <p className="endLinksH">ABOUT US</p>
                <p className="endLink" ><NavLink to="/about" className="endLink" >OUR COMPANY</NavLink></p>
                <p className="endLink" ><NavLink to="/itservices" className="endLink" >IT SERVICES</NavLink></p>
                <p className="endLink" ><NavLink to="/usstaffing" className="endLink" >US STAFFING</NavLink></p>
              </div>
              <div className="endCommunityDiv" >COMMUNITY
                <p>
                  <a href="https://www.linkedin.com/company/raks-group-llc" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin endIcn" aria-hidden="true"></i></a>
                  <a href="mailto:nithinkumaralladi.me@gmail.com" ><i className="fa fa-envelope endIcn" aria-hidden="true"></i></a>
                  <a href="https://www.glassdoor.co.in/Reviews/RAKS-Group-Reviews-E2452158.htm" target="_blank" ><img src={glassdoor} className="glassdoorIcn" /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;