import React, { Component } from 'react';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="contactDiv" >
                <div className="contact" >
                    <div className="details" >
                        <p className="detailsH" >ADDRESS</p>
                        <p className="detailsP">3900 Jermantown Rd, Suite 420, Fairfax, VA 22030</p>
                    </div>
                    <div className="details" >
                        <p className="detailsH" >PHONE</p>
                        <p className="detailsP">+1 571-455-7257</p>
                    </div>
                    <div className="details" >
                        <p className="detailsH" >FAX</p>
                        <p className="detailsP">571-455-1978</p>
                    </div>
                    <div className="details" >
                        <p className="detailsH" >EMAIL</p>
                        <p className="detailsP"><a href="mailto:nithinkumaralladi.me@gmail.com">info@raksgroup.net</a></p>
                    </div>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOg_n_NJl1FbkLSRHNLn8r3yeeLTZAq-D3hLGtQ6sbMAno7Q/viewform?embedded=true" width="100%" height="750" style={{ marginTop: "100px", border: "none" }} >Loading...</iframe>
            </div>
        );
    }
}