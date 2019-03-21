import React, { Component } from 'react';
import cr from './imgs/custRelation.png';
import vc from './imgs/valueChain.png';
import pr from './imgs/promise.png';
import tr from "./imgs/trans.svg";

export default class About extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            id: id,
        })
        document.getElementById("nvbr").className = document.getElementById('nvbr') + " abtNvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link abtLink";
            }
        })
    }
    render() {
        return (
            <div className="outerAbout" >
                <div className="about" >
                    <p className="aboutH" >ABOUT US</p>
                    <div className="aboutP" >
                        <p className="p1" >
                            RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries.
                        </p>
                        <br />
                        <p className="para" >
                            We specialize in contract, contract-to-hire and full-time placement staffing services and our staffing and
                            talent resources extend throughout the United States. Through our comprehensive network of talented job applicants,
                            we select only the most qualified individuals within every industry to service our clients.
                            <br />
                            We offer services of its consultants with extensive experience in client server applications. We develop solutions using proven tools that fit our
                            client’s Information Technology standards.
                            <br />
                            Our information technology professionals have built a reputation as business-oriented consultants with deep technical expertise, who design, build, and implement innovative information
                            technology solutions to address our clients’ needs.
                        </p>
                    </div>
                    <div className="whyDiv" >
                        <p className="whyH" >WHY RAKS GROUP</p>
                        <div className="vertiLine1" ></div>
                        <div className="vertiLine2" ></div>
                        <div className="custRelationDiv" >
                            <img className="icn" src={cr} style={{ marginTop: "20px" }} />
                            <p className="custRelationH" >CUSTOMER RELATION</p>
                        </div>
                        <div>
                            <img className="icn" src={vc} style={{ marginTop: 320 }} />
                        </div>
                        <div>
                            <img className="icn" src={pr} style={{ marginTop: 20, left:"50%" }} />
                        </div>
                        <div>
                            <img className="icn" src={tr} style={{ marginTop: 920 }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// TRANSPARENCY
// We ensure accountability quality and timely delivery of projects.

// CUSTOMER RELATION
// We bridge enduring relationships with our valued clients.

// HAPPINESS FOR VALUE CHAIN
// We offer services with total value-for-money to give maximum ROI for entire value chain.

// PROMISES TO KEEP
// We ensure to deliver more than what we promise with our enhanced delivery models and services.