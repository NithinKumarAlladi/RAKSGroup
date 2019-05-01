import React, { Component } from 'react';

export default class UsStaffing extends Component {
    componentDidMount() {
        document.getElementById("nvbr").className = "nvbr usNvbr";
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
                <div className="usHDiv" >
                    <p className="usH" >US STAFFING</p>
                    <p className="para" > We specialize in contract, contract-to-hire and full-time placement staffing services and our staffing and talent resources extend throughout the United States. Through our comprehensive network of talented job applicants.
                        <br /><br />We select only the most qualified individuals within every industry to service our clients. We offer the services of its consultants with extensive experience in client server applications.
                    </p>
                </div>
                <div className="usMainDiv" >
                    <div className="stepsDiv" >
                        <div className="paragraph" >
                            <p className="numbering" >Step 1</p>
                            <p className="stepP" >Once we undertake US Staffing assignments from clients,
                                we synchronize all the requirements with existing resource databases both conventional and non-conventional, referral networks, etc. in searching the right talent.
                            </p>
                        </div>
                        <div className="paragraph" >
                            <p className="numbering" >Step 2</p>
                            <p className="stepP" >
                                We prepare exclusive search strategy to address the unique needs of clients for finding the most apt talent pool of resources.
                        <br />
                                Based on the strategy, we search the talent and shortlist the probable resources.
                        </p>
                        </div>
                        <div className="paragraph" >
                            <p className="numbering" >Step 3</p>
                            <p className="stepP" >
                                Out of that probable list, we again scan and screen profiles based on their earlier roles and responsibilities,
                                additional qualifications, willingness to relocate to overseas locations, etc. Thus, we prepare the final list and complete the staffing assignment.
                            </p>
                        </div>
                    </div>
                    <div className="stepsDiv rightImg " ><div className="shade" ></div></div>
                    <div className="stepsDiv leftImg" ></div>
                    <div className="stepsDiv" >
                        <div className="paragraph" >
                            <p className="numbering" >Step 4</p>
                            <p className="stepP" >
                                In all steps of our US Staffing, we accentuate on simplifying processes,
                                procedures, strategy compliances for stakeholders like clients, associates, workforce and prospective resources.
                            </p>
                        </div>
                        <div className="paragraph" >
                            <p className="numbering" >Step 5</p>
                            <p className="stepP" >
                                We emphasize on clients and their unique requirements. From analysis to deployment,
                                we complete each step in a cohesive manner with client feedback being an important part of the process.
                            </p>
                        </div>
                        <div className="paragraph" >
                            <p className="numbering" >Step 6</p>
                            <p className="stepP" >
                                Serving clients with the best in marketing strategies, providing high end consulting and service.
                                Sourcing and deploying highly skilled IT specialists in mainstream and good technologies to meet client's temporary, permanent or contracting needs.
                                We provide the best recruitment solutions for every assignment while ensuring quality, integrity, expertise at an affordable cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}