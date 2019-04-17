import React, { Component } from 'react';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="contactDiv" >
                <div className="contactImg" ></div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOg_n_NJl1FbkLSRHNLn8r3yeeLTZAq-D3hLGtQ6sbMAno7Q/viewform?embedded=true" width="100%" height="750" style={{ marginTop: "100px", border: "none" }} >Loading...</iframe>
            </div>
        );
    }
}