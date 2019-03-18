import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import people from "./imgs/people.png";
import product from './imgs/product.png'
import process from './imgs/process.png';
import mission from './imgs/rocket.svg';
import vision from './imgs/vision.png';

export default class Home extends Component {
    render() {
        let text = "Redefined"
        return (
            <Router>
                <div>
                    <div className="home" >
                        <p className="heading" >Staffing <br /> <span style={{ fontSize: "1em",color:"#f0a07c" }} >{text}</span></p>
                    </div>
                    <div className="taglineImgs" >
                        <section className="imgDiv" >
                            <img className="imgs" alt="This is some alt content" src={people} />
                            <p>People</p>
                        </section>
                        <section className="imgDiv" >
                            <img className="imgs" alt="This is some alt content" src={process} />
                            <p>Process</p>
                        </section>
                        <section className="imgDiv" >
                            <img className="imgs" alt="This is some alt content" src={product} />
                            <p>Product</p>
                        </section>
                    </div>
                    <div className="intro" >
                        <span className="weAre" > We <br /> Are</span>
                        <span className="introP" >RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries. We specialize in contract,
                             contract-to-hire and full time placement staffing services and our staffing and talent resources extend throughout the United States.</span>
                    </div>
                    <div className="mvDiv" >
                        <div className='mDiv' >
                            <img className='mImg' src={mission} alt="this is some alt message" />
                            <p className="missionP" >We make our clients happy, Happy clients means repeat business, which is smart business. We consider quality as the way of life at RAKS GROUP. We offer services  according to clients’ needs,
                                We render total support to ensure quality in the entire process.
                            </p>
                        </div>
                        <div className='vDiv'>
                            <img className='vImg' src={vision} alt="this is some alt message" />
                            <p className="visionP" >We make our clients happy, Happy clients means repeat business, which is smart business. We consider quality as the way of life at RAKS GROUP. We offer services  according to clients’ needs,
                                We render total support to ensure quality in the entire process.
                            </p>
                        </div>
                    </div>
                    <div className="servicesDiv" >
                        <p className="servicesP" >Services</p>
                        <div className="servicesBL" >
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >US Staffing</NavLink>
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >CONSULTING</NavLink>
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >PRODUCT DEVELOPMENT</NavLink>
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >APPLICATION DEVELOPMENT</NavLink>
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >MOBILE APP DEVELOPMENT</NavLink>
                            <NavLink to="/" exact activeClassName="activeLink" className="servicesLink" >TRAINING</NavLink>

                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}