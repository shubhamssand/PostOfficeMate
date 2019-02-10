import React, { Component } from 'react';
import logo from './logo.svg';
import uspslogo from './uspsLogo.png';
import './App.css';

class USPSROWS extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1,
            name:"Saket",
            jobsize:100,
            status:"Pending",
            timestamp: new Date().toDateString()
        }
        this.print=this.print.bind(this)

    }
    print(){
        window.alert("Item queued for printing")
    }
  render() {
    let a=null
    if(this.props.data.status=="InQueue"){
        a=(<td><button style={{color:"blue"}} onClick={this.print}>Print</button></td>)
    }
    return (
      
      <tr>
      <td>{this.props.data.id}</td>
      <td>{this.props.data.name}</td>
      <td>{this.props.data.jobsize}</td>
      <td>{this.props.data.status}</td>
      <td>{this.props.data.timestamp}</td>
      {a}
      
    </tr>
    
    );
  }
}

export default USPSROWS;
