import React, { Component } from 'react';
import logo from './logo.svg';
import uspslogo from './uspsLogo.png';
import './App.css';

class ROWS extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1,
            name:"Saket",
            jobsize:100,
            status:"Pending",
            timestamp: new Date().toDateString()
        }
    }

  render() {
    

    return (
      
      <tr>
      <td>{this.props.data.id}</td>
      <td>{this.props.data.name}</td>
      <td>{this.props.data.jobsize}</td>
      <td>{this.props.data.status}</td>
      <td>{this.props.data.timestamp}</td>
      
    </tr>
    
    );
  }
}

export default ROWS;
