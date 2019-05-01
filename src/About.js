import React, { Component } from 'react';
import cr from './imgs/custRelation.svg';
import vc from './imgs/valueChain.svg';
import pr from './imgs/icons/promise.svg';
import tr from "./imgs/transparency.svg";

export default class About extends Component {
    componentDidMount() {
        document.getElementById("nvbr").className = document.getElementById('nvbr').className + " abtNvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link abtLink";
            }
        })
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="outerAbout" >
                <div className="aboutDiv">
                    <p className="aboutH" >ABOUT US</p>
                    <p className="p1" >
                        RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries.
                        <br />We offer a wide range of IT services that can be custom tailored to meet our customer’s specific needs.
                    </p>
                    {/* <p className="para" >
                        We specialize in contract, contract-to-hire and full-time placement staffing services and our staffing and
                        talent resources extend throughout the United States. Through our comprehensive network of talented job applicants,
                        we select only the most qualified individuals within every industry to service our clients.
                    </p>
                    <p className="para" >
                        We offer services of its consultants with extensive experience in client server applications. We develop solutions using proven tools that fit our
                        client’s Information Technology standards.
                    </p>
                    <p className="para" >
                        Our information technology professionals have built a reputation as business-oriented consultants with deep technical expertise, who design, build, and implement innovative information
                        technology solutions to address our clients’ needs.
                    </p> */}
                </div>
                <div className="whyOuterDiv" >
                    <div className="whyDiv" >
                        <p className="whyH" >WHY RAKS GROUP</p>
                        <div className="whyContent" >
                            <div className="custRel" >
                                <div className="icn" >
                                    <img  alt="this is some alternative text." className="icnImg" src={cr} />
                                </div>
                                <div>
                                    <p className="reasonHeading" >CUSTOMER RELATION</p>
                                    <p className="reason" >We bridge enduring relationships with our valued clients.</p>
                                </div>
                            </div>
                            <div className="custRel" >
                                <div className="icn" >
                                    <img  alt="this is some alternative text." className="icnImg" src={vc} />
                                </div>
                                <div>
                                    <p className="reasonHeading" >HAPPINESS FOR VALUE CHAIN</p>
                                    <p className="reason" >We offer services with total value-for-money to give maximum ROI for entire value chain.</p>
                                </div>
                            </div>
                            <div className="custRel" >
                                <div className="icn" >
                                    <img  alt="this is some alternative text." className="icnImg" src={pr} />
                                </div>
                                <div>
                                    <p className="reasonHeading" >PROMISES TO KEEP</p>
                                    <p className="reason" >We ensure to deliver more than what we promise with our enhanced delivery models and services.</p>
                                </div>
                            </div>
                            <div className="custRel" >
                                <div className="icn" >
                                    <img  alt="this is some alternative text." className="icnImg" src={tr} />
                                </div>
                                <div>
                                    <p className="reasonHeading" >TRANSPARENCY</p>
                                    <p className="reason" >We ensure accountability quality and timely delivery of projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whyImg" ></div>
                </div>
            </div>
        );
    }
}