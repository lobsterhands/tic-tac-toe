import React, { Component } from 'react';

class Square extends Component {

    render() {
        const highlight = (this.props.highlight ? "highlight" : "");

        return(
            <button className={"square " + highlight} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;