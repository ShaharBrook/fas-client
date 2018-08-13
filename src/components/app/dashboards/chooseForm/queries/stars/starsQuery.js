import React, { Component } from 'react';
import {Button, Form} from "semantic-ui-react";

class StarsQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {display: true};
    }
    render() {
        return this.state.display && <Form>
            <Button className='close-button' onClick={this.props.closeForm}>x</Button>
            <Form.Input label='אפליקציה' type='text' />
            <Form.Input label='שאלה' type='text' />
            <Form.Input label='מקסימום' type='number' />
            <Button type='submit'>ייצר טופס</Button>
        </Form>;
    }
}
export default StarsQuery;
