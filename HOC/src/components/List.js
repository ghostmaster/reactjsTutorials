import React, { Component } from 'react';
import upperCaseHOC from './uppercaseHOC';
class List extends Component {
  render() {
    return (
      <ul>
         <UppCaseComponent names ={this.props.names} />
        </ul>
    );
  }
}

const UppCaseComponent = ({names}) => {
  return (
    <ul>
      {names.map((name,index)=>{
              return <li key={index}> {name} </li>;
          })
      }
    </ul>
  )
}

export default upperCaseHOC('names')(List);
