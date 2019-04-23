import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import people from "./imgs/icons/people.svg";
import product from './imgs/icons/product.svg'
import process from './imgs/icons/process.svg';
import mission from './imgs/icons/mission.svg';
import vision from './imgs/icons/vision.svg';
import staff from './imgs/icons/staff.svg';
import consultation from './imgs/icons/consultation.svg';
import mobileAppDev from './imgs/icons/mobileAppDev.svg';
import productDev from './imgs/icons/productDev.svg';
import training from './imgs/icons/training.svg';
import appDev from './imgs/icons/appDev.svg';




export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
        }
    }
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
            console.log(homeId);
            if (document.getElementById('home1') || document.getElementById('home2') || document.getElementById('home3')) {
                homeId = homeId > 3 ? homeId - 3 : homeId;
                switch (homeId) {
                    case 1: {
                        document.getElementById('home1').style.display = "flex";
                        document.getElementById('home2').style.display = "none";
                        document.getElementById('home3').style.display = "none";
                        document.getElementById('heading1').style.display = "none";
                        setTimeout(() => {
                            if (document.getElementById("heading1")) {
                                document.getElementById("heading1").style.display = "flex";
                            }
                        }, 1100)
                        break;
                    }
                    case 2: {
                        document.getElementById('home1').style.display = "none";
                        document.getElementById('home2').style.display = "flex";
                        document.getElementById('home3').style.display = "none";
                        document.getElementById('heading2').style.display = "none";
                        setTimeout(() => {
                            if (document.getElementById("heading2")) {
                                document.getElementById("heading2").style.display = "flex";
                            }
                        }, 1100)
                        break;
                    }
                    case 3: {
                        document.getElementById('home1').style.display = "none";
                        document.getElementById('home2').style.display = "none";
                        document.getElementById('home3').style.display = "flex";
                        document.getElementById('heading3').style.display = "none";
                        setTimeout(() => {
                            if (document.getElementById("heading3")) {
                                document.getElementById("heading3").style.display = "flex";
                            }
                        }, 1100)
                        break;
                    }
                }
                homeId++;
            }
        };
        switchHomePage();
        const timerId = setInterval(switchHomePage, 6000);
        this.setState({ timer: timerId })
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (
            <Router>
                <div>
                    <div className="home" >
                        <div id="home1" >
                            <div id="heading1" className="headingDiv" >
                                <p className="heading" >We Are</p>
                                <p className="heading raks " style={{ fontWeight: "600" }}> <span style={{color:"#243665"}} >RAKS </span>GROUP </p>
                                <p className="heading" style={{ fontStyle: "italic", fontSize: "1.5em" }}> PEOPLE, PROCESS, PRODUCT </p>
                                <NavLink to="/about" className="exploreBtn" > Explore </NavLink>
                            </div>
                        </div>
                        <div id="home2" >
                            <div id="heading2" className="headingDiv" >
                                <p className="heading" style={{ fontWeight: "600", padding: "20px" }} >US STAFFING</p>
                                <p className="heading">Staffing redefined for client needs</p>
                            </div>
                        </div>
                        <div id="home3" >
                            <div id="heading3" className="headingDiv" >
                                <p className="heading" style={{ fontWeight: "600", padding: "20px" }} >IT SERVICES</p>
                                <p className="heading">Defining IT Services for the business</p>
                            </div>
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
                            <p>MISSION</p>
                            <p className="missionP" >We make our clients happy, Happy clients means repeat business, which is smart business. We consider quality as the way of life at RAKS GROUP. We offer services  according to clients’ needs,
                                We render total support to ensure quality in the entire process.
                            </p>
                        </div>
                        <div className='vDiv'>
                            <img className='vImg' src={vision} alt="this is some alt message" />
                            <p>VISION</p>
                            <p className="visionP" >We make our clients happy, Happy clients means repeat business, which is smart business. We consider quality as the way of life at RAKS GROUP. We offer services  according to clients’ needs,
                                We render total support to ensure quality in the entire process.
                            </p>
                        </div>
                    </div>
                    <div className="servicesDiv" >
                        <p className="servicesP" >Services</p>
                        <div className="servicesBL" >
                            <NavLink to="/usstaffing" exact  ><button className="servicesLink" ><img src={staff} className="servicesLinkImgs" alt="this is some alt text." /> US STAFFING</button></NavLink>
                            <NavLink to="/itservices/product" exact  ><button className="servicesLink" ><img src={productDev} className="servicesLinkImgs" alt="this is some alt text." />PRODUCT DEVELOPMENT</button></NavLink>
                            <NavLink to="/itservices/consulting" exact  ><button className="servicesLink" ><img src={consultation} className="servicesLinkImgs" alt="this is some alt text." />CONSULTING</button></NavLink>
                            <NavLink to="/itservices/application" exact  ><button className="servicesLink" ><img src={appDev} className="servicesLinkImgs" alt="this is some alt text." />APPLICATION DEVELOPMENT</button></NavLink>
                            <NavLink to="/itservices/training" exact  ><button className="servicesLink" ><img src={training} className="servicesLinkImgs" alt="this is some alt text." />TRAINING</button></NavLink>
                            <NavLink to="/itservices/mobile" exact  ><button className="servicesLink" ><img src={mobileAppDev} className="servicesLinkImgs" alt="this is some alt text." />MOBILE APP DEVELOPMENT</button></NavLink>
                        </div>
                    </div>
                    <div className="careerDiv" >
                        <span className="careerHeading" >Career</span>
                        <div className="careerP" >
                            <p>
                                We thrive to create an ambience that is best suitable for our employees.
                                <br />Integrity, values and determination are the qualities of our team which unites us and makes RAKS Group LLc.</p>
                            <NavLink to="/career"><button className="currOpeningLink">VIEW CURRENT OPENINGS</button></NavLink>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}