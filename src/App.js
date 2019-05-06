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
import logo from "./imgs/icons/logoH.svg";
import glassdoor from './imgs/glassdoor.svg';
import menuIcn from './imgs/bars-solid.svg';
import linkedIn from './imgs/icons/linkedin.svg';
import mail from './imgs/icons/envelope.svg';
import fb from './imgs/icons/facebook.svg';
import twitter from './imgs/icons/twitter.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nvbr" id="nvbr">
            <object type="image/svg+xml" data={logo} className="logo" >Logo not rendered</object>
            <nav className="nav" id="nav">
              <NavLink to="/" exact activeClassName="activeLink" className="link" >HOME</NavLink>
              <NavLink to="/about" activeClassName="activeLink" className="link" >ABOUT US</NavLink>
              <NavLink to="/usstaffing" activeClassName="activeLink" className="link" >US STAFFING</NavLink>
              <NavLink to="/itservices" activeClassName="activeLink" className="link" >IT SERVICES</NavLink>
              <NavLink to="/career" activeClassName="activeLink" className="link" >CAREER</NavLink>
              <NavLink to="/contact" activeClassName="activeLink" className="link" >CONTACT</NavLink>
            </nav>
            <div className="menuDiv" >
              <img alt="this is some alternative text." src={menuIcn} className="menuIcn" onClick={() => {
                this.toggleMenu();
              }} />
            </div>
          </div>
          {this.state.showMenu ? <div className="menuContent" >
            <p className="menuLink" ><NavLink to="/" exact className="endLink" onClick={() => { this.toggleMenu(); }} >HOME</NavLink></p>
            <p className="menuLink" ><NavLink to="/about" className="endLink" onClick={() => { this.toggleMenu(); }} >ABOUT</NavLink></p>
            <p className="menuLink" ><NavLink to="/usstaffing" className="endLink" onClick={() => { this.toggleMenu(); }} >US STAFFING</NavLink></p>
            <p className="menuLink" ><NavLink to="/itservices" className="endLink" onClick={() => { this.toggleMenu(); }} >IT SERVICES</NavLink></p>
            <p className="menuLink" ><NavLink to="/career" className="endLink" onClick={() => { this.toggleMenu(); }} >CAREER</NavLink></p>
            <p className="menuLink" ><NavLink to="/contact" className="endLink" onClick={() => { this.toggleMenu(); }} >CONTACT</NavLink></p>
          </div> : null}
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
                <object type="image/svg+xml" data={logo} className="endLogo" >Logo not rendered</object>
                <p className="endAddress" > 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030.<br /> <br /> +1 571-455-7257 <br /><br /> <a className="mailtoHref" href="mailto:info@raksgroup.com" >info@raksgroup.com</a></p>
              </div>
              <div>
                <p className="endLinksH" >NAVIGATE</p>
                <p className="endLink" ><NavLink to="/" exact className="endLink" activeClassName="activeEndLink" >HOME</NavLink></p>
                <p className="endLink" ><NavLink to="/career" className="endLink" activeClassName="activeEndLink">CAREER</NavLink></p>
                <p className="endLink" ><NavLink to="/contact" className="endLink" activeClassName="activeEndLink">CONTACT</NavLink></p>
              </div>
              <div>
                <p className="endLinksH">ABOUT US</p>
                <p className="endLink" ><NavLink to="/about" className="endLink" activeClassName="activeEndLink" >OUR COMPANY</NavLink></p>
                <p className="endLink" ><NavLink to="/itservices" className="endLink" activeClassName="activeEndLink" >IT SERVICES</NavLink></p>
                <p className="endLink" ><NavLink to="/usstaffing" className="endLink" activeClassName="activeEndLink" >US STAFFING</NavLink></p>
              </div>
              <div className="endCommunityDiv" >COMMUNITY
                <div className="endIconDiv">
                  <a href="https://www.linkedin.com/company/raks-group-llc" target="_blank" rel="noopener noreferrer" ><img alt="this is some alternative text." src={linkedIn} className="endIcn" /></a>
                  <a href="mailto:nithinkumaralladi.me@gmail.com" ><img alt="this is some alternative text." src={mail} className="endIcn" /></a>
                  <a href="https://www.glassdoor.co.in/Reviews/RAKS-Group-Reviews-E2452158.htm" target="_blank" ><img alt="this is some alternative text." src={glassdoor} className="endIcn glassdoorIcn " /></a>
                  <a href="https://www.facebook.com/RAKS-Group-LLC-594532424379987/" target="_blank" ><img alt="this is some alternative text." src={fb} className="endIcn" style={{padding:"10px 5px"}} /></a>
                  <a href="https://twitter.com/GroupRaks" target="_blank" ><img alt="this is some alternative text." src={twitter} className="endIcn" /></a>
                </div>
              </div>
            </div>
            <div className="creditsDiv" >
              <span className="rights" >
                All rights reserved RAKS Group LLC
              </span>
              <span className="credits" >
                Icons made by
                    <a href="https://www.flaticon.com/authors/chanut"  > Chanut, </a> 
                    <a href="https://www.freepik.com/"> Freepik, </a>
                    <a href="https://www.flaticon.com/authors/geotatah"> Geotatah, </a>
                    <a href="https://www.flaticon.com/authors/srip" > Srip, </a>
                    <a href="https://www.flaticon.com/authors/monkik" > Monkik, </a>
                    <a href="https://www.flaticon.com/authors/eucalyp" > Eucalyp, </a>
                    <a href="https://www.flaticon.com/authors/itim2101" > Itim2101 and </a>
                    <a href="https://www.flaticon.com/authors/google" title="Google"> Google</a>
                    from
                    <a href="https://www.flaticon.com/" > www.flaticon.com</a> is licensed by
                    <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">
                    CC 3.0 BY</a>
              </span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

