import React, { Component } from 'react';
import consultation from './imgs/icons/consultation.svg';
import mobileAppDev from './imgs/icons/mobileAppDev.svg';
import productDev from './imgs/icons/productDev.svg';
import training from './imgs/icons/training.svg';
import appDev from './imgs/icons/appDev.svg';


export default class ItServices extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        document.getElementById("nvbr").className = "nvbr itServicesNvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link itServicesLink";
            }
        })
        const { id } = this.props.match.params;
        if (id) {
            window.scrollTo({
                top: (document.getElementById(id).scrollHeight - 100),
                left: (document.getElementById(id).scrollWidth - 100),
                behavior: "smooth",
            })
        } else {
            window.scrollTo(0, 0);
        }
        this.setState({
            id: id,
        })
    }
    render() {

        return (
            <div className="mainISDiv" >
                <p className="itServicesH" >IT SERVICES</p>
                <div className="itServices" >
                    <div className="serviceDiv" id="consulting" >
                        <p className="serviceH" ><img src={consultation} className="serviceImgs" alt="this is some alt text." />CONSULTING</p>
                        <p className="serviceP" >We offer IT consultancy services that are based on a holistic approach, an extensive knowledge of the technology marketplace and organized workflow automation.
                            RAKS Group offers unique and flexible temporary staffing solutions for your niche IT skillset requirement, allowing you to concentrate on your core business areas.</p>
                    </div>
                    <div className="serviceDiv" id="product"  >
                        <p className="serviceH" ><img src={productDev} className="serviceImgs" alt="this is some alt text." />PRODUCT DEVELOPMENT</p>
                        <p className="serviceP" >We have expert IT Consultants who can custom built IT Products based on unique needs of clients.
                            We undertake product development on mobile technologies, high-end networking and ITIL environments.</p>
                    </div>
                    <div className="serviceDiv" id="mobile" >
                        <p className="serviceH" id="mobile" ><img src={mobileAppDev} className="serviceImgs" alt="this is some alt text." />MOBILE APP DEVELOPMENT</p>
                        <p className="serviceP" id="mobile" >Our  expert team of developers has competency in building tailor-made apps both for Android  and IOS.
                            We can develop both m Commerce Applications as well as Value Added Services applications for these mobile environments.</p>
                    </div>
                    <div className="serviceDiv" id="application" >
                        <p className="serviceH" id="application" ><img src={appDev} className="serviceImgs" alt="this is some alt text." />APPLICATION DEVELOPMENT</p>
                        <p className="serviceP" id="application" >We offer concrete framework for application development outsourcing through an on-site and offshore model.
                            Each model takes care of balancing the phases and tasks of the projects to deliver the best results.</p>
                    </div>
                    <div className="serviceDiv" id="training" >
                        <p className="serviceH" ><img src={training} className="serviceImgs" alt="this is some alt text." />TRAINING</p>
                        <p className="serviceP" >All who are interested in Information Technology can  contact us for latest Training in Latest Technologies ,
                            we offer corporate trainings and individual are also welcome.</p>
                    </div> 
                </div>
            </div>
        );
    }
}