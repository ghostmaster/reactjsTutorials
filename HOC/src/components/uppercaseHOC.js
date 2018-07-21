import React,{Component} from 'react';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );

const UpperCaseHOC = (props) => (WrappedComponent)=>{

    return class UpperCaseHOC extends Component{
        render(){
            let uppercaseNames = this.props.names.map(name => name.toUpperCase());
            return isEmpty(this.props.names) ? <div> Please Enter Something in Textbox </div> : <WrappedComponent {...this.props} names={uppercaseNames} />
        }
    }
}

export default UpperCaseHOC;