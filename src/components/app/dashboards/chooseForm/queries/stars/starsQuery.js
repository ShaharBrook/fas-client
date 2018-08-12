import React, { Component } from 'react';
import {Form} from "semantic-ui-react";

class StarsQuery extends Component {
    render() {
        return <Form>
            <Form.Input label='stars' type='text' />
        </Form>
    }
}

export default StarsQuery;
