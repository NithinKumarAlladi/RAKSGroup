import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import people from "./imgs/people.png";
import product from './imgs/product.png'
import process from './imgs/process.png';
import mission from './imgs/rocket.svg';
import vision from './imgs/vision.png';

export default class Home extends Component {
    componentDidMount() {
        document.getElementById("nvbr").className = "nvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link";
            }
        });
        window.scrollTo(0, 0);
        let homeId = 1;
        const switchHomePage = () => {
            if (document.getElementById('home1') || document.getElementById('home2') || document.getElementById('home3')) {
                homeId = homeId > 3 ? homeId - 3 : homeId;
                switch (homeId) {
                    case 1: {
                        console.log(homeId);
                        document.getElementById('home1').style.display = "flex";
                        document.getElementById('home2').style.display = "none";
                        document.getElementById('home3').style.display = "none";
                        document.getElementById('heading').style.display = "none";
                        showHeading();
                        break;
                    }
                    case 2: {
                        console.log(homeId);
                        document.getElementById('home1').style.display = "none";
                        document.getElementById('home2').style.display = "flex";
                        document.getElementById('home3').style.display = "none";
                        document.getElementById('heading').style.display = "none";
                        showHeading();
                        break;
                    }
                    case 3: {
                        console.log(homeId);
                        document.getElementById('home1').style.display = "none";
                        document.getElementById('home2').style.display = "none";
                        document.getElementById('home3').style.display = "flex";
                        document.getElementById('heading').style.display = "none";
                        showHeading();
                        break;
                    }
                }
                homeId++;
            }
        };
        const showHeading = () => {
            setTimeout(() => {
                document.getElementById('heading').style.display = "initial";
            }, 1100)
        }
        switchHomePage();
        setInterval(switchHomePage, 3000)
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="home" >
                        <div id="home1" >
                            <p id="heading" >Staffing Redefined </p>
                        </div>
                        <div id="home2" >
                            <p id="heading" >Staffing Redefined</p>
                        </div>
                        <div id="home3" >
                            <p id="heading" >Staffing Redefined</p>
                        </div>
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
                        <div className="weAreImg" ></div>
                        <div className="introDiv" >
                            <span className="introP" ><p className="weAre" >WE ARE </p>RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries. We specialize in contract,
                             contract-to-hire and full time placement staffing services and our staffing and talent resources extend throughout the United States.</span>
                        </div>
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
                            <NavLink to="/usstaffing" exact  ><button className="servicesLink" >US Staffing</button></NavLink>
                            <NavLink to="/itservices/consulting" exact  ><button className="servicesLink" >CONSULTING</button></NavLink>
                            <NavLink to="/itservices/product" exact  ><button className="servicesLink" >PRODUCT DEVELOPMENT</button></NavLink>
                            <NavLink to="/itservices/application" exact  ><button className="servicesLink" >APPLICATION DEVELOPMENT</button></NavLink>
                            <NavLink to="/itservices/mobile" exact  ><button className="servicesLink" >MOBILE APP DEVELOPMENT</button></NavLink>
                            <NavLink to="/itservices/training" exact  ><button className="servicesLink" >TRAINING</button></NavLink>
                        </div>
                    </div>
                    <div className="careerDiv" >
                        <span className="careerHeading" >Career</span>
                        <div className="careerP" >
                            <p>
                                We thrive to create an ambience that is best suitable for our employees.
                                <br />Integrity, values and determination are the qualities of our team which unites us and makes RAKS Group LLc.</p>
                            <NavLink to="/career"><button className="servicesLink">VIEW CURRENT OPENINGS</button></NavLink>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}