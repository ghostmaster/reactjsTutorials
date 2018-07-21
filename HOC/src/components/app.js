import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      names:[]
    }
  }
  onSubmit(event){
    event.preventDefault();
    this.setState({names:[...this.state.names,event.target[0].value]})
  }

  render() {
    console.log(this.state.names);
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input name='input' placeholder ='enter some value' />
        <button type='submit'> Enter </button>
        <List names={this.state.names} />
      </form>
    );
  }
}
