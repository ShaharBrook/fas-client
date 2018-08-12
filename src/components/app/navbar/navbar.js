import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home',
            items: [
                { key: 'home', name: 'Home' },
                { key: 'addForm', name: 'Add Form' },
                { key: 'statics', name: 'Statics' },
            ]
        };
        this.updateSelected = this.updateSelected.bind(this);
    }

    updateSelected(selected) {
        return () => {
            this.props.updateSelected(selected);
            this.setState({selected});
        }
    }

    render() {
        let items = this.state.items.map(item=> item.key === this.state.selected ? ({...item, active: true}) : item);
        return <div className='ui menu'>
            {
                items.map(item => (
                    <a onClick={this.updateSelected(item.key)} key={item.key} className={`${item.active?'active':''} item`}>{item.name}</a>
                ))
            }
        </div>
    }
}

export default Navbar;
