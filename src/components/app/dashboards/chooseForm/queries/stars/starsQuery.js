import React, { Component } from 'react';
import {Button, Form} from "semantic-ui-react";
import {Benano} from "../../../../../helpers/api/benano";

class StarsQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            submitted: false,
            application: 'נמסיס',
            question: 'עד מתי',
            high: '5'
        };
        this.submitFunction = this.submitFunction.bind(this);
        this.applicationUpdate = this.applicationUpdate.bind(this);
        this.questionUpdate = this.questionUpdate.bind(this);
        this.highUpdate = this.highUpdate.bind(this);
        this.getFormValues = this.getFormValues.bind(this);
    }

    submitFunction() {
        console.log('submitForm!');
        this.setState({submitted: true});
    }

    applicationUpdate({target}) {
        this.setState({application: target.value});
    }

    questionUpdate({target}) {
        this.setState({question: target.value});
    }

    highUpdate({target}) {
        this.setState({high: target.value});
    }

    getFormValues() {
        const {application, question, high} = this.state;
        return {
            formType: 'stars',
            application,
            question,
            high
        }
    }

    render() {
        return this.state.display && <Form onSubmit={this.submitFunction}>
            <Button className='close-button' onClick={this.props.closeForm}>x</Button>
            <Form.Input onChange={this.applicationUpdate} label='אפליקציה' type='text' />
            <Form.Input onChange={this.questionUpdate} label='שאלה' type='text' />
            <Form.Input onChange={this.highUpdate} label='מקסימום' type='number' />
            <Button type='submit'>ייצר טופס</Button>
            {this.state.submitted && <Benano data={this.getFormValues()}/>}
        </Form>;
    }
}
export default StarsQuery;
