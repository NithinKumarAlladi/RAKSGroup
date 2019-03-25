import React, { Component } from 'react';
import arrow from './imgs/arrow.svg';

export default class UsStaffing extends Component {
    componentDidMount() {
        document.getElementById("nvbr").className = document.getElementById('nvbr') + " usNvbr";
        document.getElementById('nav').childNodes.forEach((ele) => {
            if (ele.className.includes('activeLink')) {
            } else {
                ele.className = "link usLink";
            }
        })
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="mainDiv" >
                <p className="usH" >US STAFFING</p>
                <div className="stage yellow" >
                    <p className="paragraph" >Once we undertake US Staffing assignments from clients,
                        we synchronize all the requirements with existing resource databases both conventional and non-conventional, referral networks, etc. in searching the right talent.
                    </p>
                    <div className="arrowDiv yellow" >
                        <img className="arrowIcn" src={arrow} />
                    </div>
                </div>
                <div className="stage white" >
                    <p className="paragraph" >
                        We prepare exclusive search strategy to address the unique needs of clients for finding the most apt talent pool of resources.
                        <br />
                        Based on the strategy, we search the talent and shortlist the probable resources.
                    </p>
                    <div className="arrowDiv white " >
                        <img className="arrowIcn" src={arrow} />
                    </div>
                </div>
                <div className="stage yellow" >
                    <p className="paragraph" >
                        Out of that probable list, we again scan and screen profiles based on their earlier roles and responsibilities,
                        additional qualifications, willingness to relocate to overseas locations, etc. Thus, we prepare the final list and complete the staffing assignment.
                    </p>
                    <div className="arrowDiv yellow" >
                        <img className="arrowIcn" src={arrow} />
                    </div>
                </div>
                <div className="stage white" >
                    <p className="paragraph" >
                        In all steps of our US Staffing, we accentuate on simplifying processes,
                        procedures, strategy compliances for stakeholders like clients, associates, workforce and prospective resources.
                    </p>
                    <div className="arrowDiv white" >
                        <img className="arrowIcn" src={arrow} />
                    </div>
                </div>
                <div className="stage yellow" >
                    <p className="paragraph" >
                        We emphasize on clients and their unique requirements. From analysis to deployment,
                        we complete each step in a cohesive manner with client feedback being an important part of the process.
                    </p>
                    <div className="arrowDiv yellow" >
                        <img className="arrowIcn" src={arrow} />
                    </div>
                </div>
                <div className="stage white" >
                    <p className="paragraph lastP" >
                        Serving clients with the best in marketing strategies, providing high end consulting and service.
                        Sourcing and deploying highly skilled IT specialists in mainstream and good technologies to meet client's temporary, permanent or contracting needs.
                        We provide the best recruitment solutions for every assignment while ensuring quality, integrity, expertise at an affordable cost.
                    </p>
                </div>
            </div>
        );
    }
}