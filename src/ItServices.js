import React, { Component } from 'react';

export default class ItServices extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        document.getElementById("nvbr").className ="nvbr itServicesNvbr";
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
                    <div className="yellowDiv" id="consulting" >
                        <p className="yellowH" >CONSULTING</p>
                        <p className="yellowP" >We offer IT consultancy services that are based on a holistic approach, an extensive knowledge of the technology marketplace and organized workflow automation.
                            RAKS Group offers unique and flexible temporary staffing solutions for your niche IT skill-set requirement, allowing you to concentrate on your core business areas.</p>
                    </div>
                    <div className="blackDiv" id="product"  >
                        <p className="blackH" >PRODUCT DEVELOPMENT</p>
                        <p className="blackP" >We have expert IT Consultants who can custom built IT Products based on unique needs of clients.
                            We undertake product development on mobile technologies, high-end networking and ITIL environments.</p>
                    </div>
                    <div className="blackDiv" id="mobile" >
                        <p className="blackH" >MOBILE APP DEVELOPMENT</p>
                        <p className="blackP" >Our  expert team of developers has competency in building tailor-made apps both for Android  and IOS.
                            We can develop both m Commerce Applications as well as Value Added Services applications for these mobile environments.</p>
                    </div>
                    <div className="yellowDiv" id="application" >
                        <p className="yellowH" >APPLICATION DEVELOPMENT</p>
                        <p className="yellowP" >We offer concrete framework for application development outsourcing through an on-site and offshore model.
                            Each model takes care of balancing the phases and tasks of the projects to deliver the best results.</p>
                    </div>
                    <div className="trainingDiv" id="training" >
                        <p className="trainingH" >TRAINING</p>
                        <p className="trainingP" >All who are interested in Information Technology can  contact us for latest Training in Latest Technologies ,
                            we offer corporate trainings and individual are also welcome.</p>
                    </div>
                </div>
            </div>
        );
    }
}