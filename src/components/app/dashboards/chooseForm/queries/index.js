import React, { Component } from 'react';

import StarsQuery from "./stars/starsQuery";
import './queries.css';

class MyQueries extends Component {
    render() {
        switch (this.props.queryType) {
            case 'stars':
                return <StarsQuery closeForm={this.props.closeForm}/>;
            default:
                return null;
        }
    };
}
export default MyQueries;