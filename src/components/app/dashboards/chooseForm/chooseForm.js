import React, { Component } from 'react';

class ChooseForm extends Component {
    constructor(){
        super();
        this.state = {
            templates:[{
                img: 'http://10.25.107.32:3030/assets/template1.svg',
                type: 'stars'
            },
            {
                img: 'http://10.25.107.32:3030/assets/template2.svg',
                type: 'stars'
            },
            {
                img: 'http://10.25.107.32:3030/assets/template3.svg',
                type: 'stars'
            }]
        }
    }
    select(e){
        if(e.target.classList.contains('chosen')){
            e.target.classList.remove('chosen');
        } else {
            e.target.classList.add('chosen');
        }
    }
  
render() {
    const templates = this.state.templates.map((e)=>{
        return <img key={e.img} src={e.img} width="200" onClick={this.select.bind(this)} alt=""/>
    }); 
        return (
            <div className="chooseForm">
              <h1>בחר תבנית:</h1>
              {templates}
            </div>
        );
    }
}

export default ChooseForm;
