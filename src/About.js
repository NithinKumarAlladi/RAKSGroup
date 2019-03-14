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
            <div>
                this is some text
                {this.state.id}
            </div>
        );
    }
}