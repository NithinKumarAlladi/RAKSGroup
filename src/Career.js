import React, { Component } from 'react';
import sa from './imgs/sideArrow.png'

export default class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenJob: null,
            showJob: false,
            jobs: [{
                position: "Software Developer",
                experience: "5 Years of experience.",
                description: "Participate in the entire software development lifecycle, analyze and understand project requirements, and develop technical specifications and designs. Perform development using Agile Methodology, create software functionalities, and deploy applications to QA, test, and production environments. Develop scripts and reusable code, identify and fix issues, and perform software validations. We might accept  a Bachelor's degree plus 5 years of progressive post baccalaureate experience in lieu of a Master's. Must be willing to travel/relocate to unanticipated locations throughout the US on short notice for extended periods of time.",
                noOfOpenings: "Multiple openings.",
                requirements: ["Master's degree or equivalent or Bachelor's + 5 Years experience.", "ASP.Net", "C#", "MVC", "Web API", "JavaScript", "JQuery", "HTML", "CSS", "Visual Studio"],
                address: "RAKS Group LLC, 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030",
            },
            {
                position: "Network Engineer",
                experience: "5 Years of experience.",
                noOfOpenings: "Multiple openings.",
                address: "RAKS Group LLC, 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030",
                requirements: ["Cisco", "Nortel", "Juniper", "Meraki", "Wireshark", "Infinistream", "Sniffer"],
                description: "Design, implement, and support remote access software solutions and multi vendor network environments. Configure and maintain Cisco and Nortel routers and switches and Juniper and Checkpoint VPNs and firewalls. Troubleshoot application issues, develop and implement Cisco and Meraki wireless technologies and QoS and traffic shaping tools, design and maintain WAN/LAN technologies, intrusion detection and prevention systems. We might accept  a Bachelor's degree plus 5 years of progressive post baccalaureate experience in lieu of a Master's. Must be willing to travel/relocate to unanticipated locations throughout the US on short notice for extended periods of time."
            },
            {
                position: "Programmer Analyst",
                experience: "5 Years of experience.",
                noOfOpenings: "Multiple openings.",
                address: "RAKS Group LLC, 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030",
                requirements: ["Angular JS", "JavaScript", "JQuery", "MVC", "HTML", "CSS", "Bootstrap", "GIT", "Jasmine"],
                description: "Develop web applications with MVC and AngularJS and nonfunctional pages using HTML and CSS. Perform UI reviews and updates, implement validation controls, and analyze layouts and functions. Create responsive multi platform websites, implement product features and bug fixes, and optimize and maintain software. Review code, write unit tests cases, verify modules and utilities, and perform version management. We might accept  a Bachelor's degree plus 5 years of progressive post baccalaureate experience in lieu of a Master's. Must be willing to travel/relocate to unanticipated locations throughout the US on short notice for extended periods of time."
            },
            {
                position: "Database Administrator",
                experience: "5 Years of experience.",
                noOfOpenings: "Multiple openings.",
                address: "RAKS Group LLC, 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030",
                requirements: ["SQL Server", "SSIS", "SSRS", "SSMS", "DTS", "Visio", "Erwin", "SQL Profiler", "Toad"],
                description: "Plan, develop, maintain, and monitor integrated database systems. Use database utility programs to monitor performance and extract,transform, load, and transfer data to target systems. Develop batch jobs, perform backups and recoveries, and run database checks. Implement security, configure replications, and performance tune and update databases. Provide production support, resolve issues, and optimize queries. We might accept  a Bachelor's degree plus 5 years of progressive post baccalaureate experience in lieu of a Master's. Must be willing to travel/relocate to unanticipated locations throughout the US on short notice for extended periods of time."
            },
            {
                position: "Systems Administrator",
                experience: "5 Years of experience.",
                noOfOpenings: "Multiple openings.",
                address: "RAKS Group LLC, 3900 Jermantown Rd, Suite 420, Fairfax, VA 22030",
                requirements: ["Linux", "Puppet", "Jenkins", "Git", "AWS", "Solaris", "Ruby", "Apache", "Weblogic"],
                description: "Perform system administration activities and build, configure, patch, and maintain servers. Configure and administer load balancers and design and develop automation processes. Install, deploy, and cluster applications across different environments and analyze test scenarios. Migrate and update software, troubleshoot issues, and provide production support.  We might accept  a Bachelor's degree plus 5 years of progressive post baccalaureate experience in lieu of a Master's. Must be willing to travel/relocate to unanticipated locations throughout the US on short notice for extended periods of time."
            }
            ]
        }
    }
    toggleShowJob() {
        this.setState({
            showJob: !this.state.showJob,
        })
    }
    componentDidMount() {
        document.getElementById("nvbr").className = "nvbr careerNvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link careerLink";
            }
        })
    }


    render() {
        return (
            <div id="outerCareerDiv" className='outerCareerDiv' >
                <p className='careerH' >CAREER</p>
                <div className="innerCareerDiv" >
                    <div className="benifitsDiv" >
                        <p className="benifitsH" >BENEFITS </p>
                        <div className='benifitsContent'>
                            <p className="benifitsIntro" >We care about our employees and believe in work life balance, and support that balance with the following benefits:</p>
                            <p className="benifits" > <img src={sa} className='sideArrow' /> Medical, Dental and Vision Insurance.</p>
                            <p className="benifits" > <img src={sa} className='sideArrow' /> Employee Life and Disability Insurance.</p>
                            <p className="benifits" > <img src={sa} className='sideArrow' /> Retirement benefits i.e 401 (K) Plan.</p>
                            <p className="benifits" > <img src={sa} className='sideArrow' /> Paid time off (holidays, vacation and sick leave).</p>
                            <p className="benifits" > <img src={sa} className='sideArrow' /> Happy Hour and get-togethers.</p>
                        </div>
                    </div>
                    <div className="openningsDiv" >
                        {this.state.jobs.map((element, index) => {
                            return (
                                <div key={index} className="shortJob" onClick={() => {
                                    this.setState({ chosenJob: element });
                                    this.toggleShowJob();
                                }} >
                                    {element.position}
                                </div>
                            )
                        })}
                    </div>
                </div>
                {this.state.showJob ? <Popup ele={this.state.chosenJob} closePopup={this.toggleShowJob.bind(this)} /> : null}
            </div>
        );
    }
}

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    render() {
        const inHeight = document.getElementById("outerCareerDiv").offsetHeight;
        return (
            <div id="outerPopupDiv" style={{ height: inHeight }} className="outerPopupDiv" >
                <div className="innerPopupDiv" >
                    <p>{this.props.ele.description}</p>
                    <button onClick={this.props.closePopup} >close</button>
                </div>
            </div>
        )
    }
}