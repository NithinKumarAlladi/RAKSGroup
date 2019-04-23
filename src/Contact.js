import React, { Component } from 'react';
import glassdoor from './imgs/glassdoorBlack.svg';
import linkedIn from './imgs/icons/linkedinBlack.svg';
import mail from './imgs/icons/envelopeBlack.svg';
import fb from './imgs/icons/facebookBlack.svg';
import twitter from './imgs/icons/twitterBlack.svg';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <p className="contactH">CONTACT US</p>
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
                        <div className="mailDiv" >
                            <p className="mailP">Please submit any inquiries via this page or you can email us directly at  <a href="mailto:nithinkumaralladi.me@gmail.com">info@raksgroup.net</a></p>
                        </div>
                        <div className="mailDiv" >
                            <p className="detailsH">Social network links</p>
                            <p className="detailsP" >
                                <a href="https://www.linkedin.com/company/raks-group-llc" target="_blank" rel="noopener noreferrer" ><img alt="this is some alternative text." src={linkedIn} className="linkIcn" /></a>
                                <a href="mailto:nithinkumaralladi.me@gmail.com" ><img alt="this is some alternative text." src={mail} className="linkIcn" /></a>
                                <a href="https://www.glassdoor.co.in/Reviews/RAKS-Group-Reviews-E2452158.htm" target="_blank" ><img alt="this is some alternative text." src={glassdoor} className="linkIcn glassdoorIcn " /></a>
                                <a href="https://www.facebook.com/RAKS-Group-LLC-594532424379987/" target="_blank" ><img alt="this is some alternative text." src={fb} className="linkIcn" /></a>
                                <a href="https://twitter.com/LlcRaks" target="_blank" ><img alt="this is some alternative text." src={twitter} className="linkIcn" /></a>
                            </p>
                        </div>
                    </div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOg_n_NJl1FbkLSRHNLn8r3yeeLTZAq-D3hLGtQ6sbMAno7Q/viewform?embedded=true" width="100%" height="700" style={{ marginTop: "10px", border: "none" }} >Loading...</iframe>
                </div>
            </div>
        );
    }
}