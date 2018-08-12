import React, { Component } from 'react';

class ChooseForm extends Component {
    constructor(){
        super();
        this.state = {
            templates:[{
                img: 'http://10.25.107.32:3030/assets/template1.svg',
                queryType: 'stars'
            },
            {
                img: 'http://10.25.107.32:3030/assets/template2.svg',
                queryType: 'like'
            },
            {
                img: 'http://10.25.107.32:3030/assets/template3.svg',
                queryType: 'tags'
            }]
        };
        this.select = this.select.bind(this);
    }
    select(queryType){
        return () => console.log(queryType);
    }
  
render() {
    const templates = this.state.templates.map((e)=>{
        return <img key={e.img} src={e.img} width="200" onClick={this.select(e.queryType)} alt=""/>
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
