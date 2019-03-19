import React, { Component } from 'react';

export default class About extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            id: id,
        })
    }
    render() {
        return (
            <div className="about" >
                <p className="aboutP1" >RAKS Group striving to be a leader in the provision of staffing services and qualified talent across an array of industries.</p>
                {/* 

                We specialize in contract, contract-to-hire and full-time placement staffing services and our staffing and talent resources extend throughout the United States. Through our comprehensive network of talented job applicants,

                We select only the most qualified individuals within every industry to service our clients. We offer services of its consultants with extensive experience in client server applications.

                We develop solutions using proven tools that fit our client’s Information Technology standards. Our information technology professionals have built a reputation as business-oriented consultants with deep technical expertise,
                who design, build, and implement innovative information technology solutions to address our clients’ needs */}
            </div>
        );
    }
}