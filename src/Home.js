import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";
import people from "./imgs/people.png";
import product from './imgs/product.png'
import process from './imgs/process.png'


export default class Home extends Component {
    render() {
        let text = "Redefined"
        return (
            <Router>
                <div>
                    <div className="home" >
                        <p className="heading" >Staffing <br /> {text}</p>
                    </div>
                    <div className="taglineImgs" >
                        <section className="imgDiv" >
                            <img className="imgs" src={people} />
                            <p>People</p>
                        </section>
                        <section className="imgDiv" >
                            <img className="imgs" src={process} />
                            <p>People</p>
                        </section>
                        <section className="imgDiv" >
                            <img className="imgs" src={product} />
                            <p>People</p>
                        </section>
                    </div>
                    <div className="intro" >
                        <p className="introP" >RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries. We specialize in contract,
                             contract-to-hire and full time placement staffing services and our staffing and talent resources extend throughout the United States.</p>
                    </div>
                </div>
            </Router>
        );
    }
}