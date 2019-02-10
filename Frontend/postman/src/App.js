import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import  Main from './Main.js';
import  USPS from './uspshome.js';
import  PGE from './pgehome.js';
import  UPLOAD from './upload.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <div>
      <BrowserRouter>
      
      <Switch>
      <Route path="/main" exact component={Main}/>
      <Route path="/uspshome" exact component={USPS}/>
      <Route path="/pgehome" exact component={PGE}/>
      <Route path="/" exact component={UPLOAD}/>
      </Switch>
      </BrowserRouter>
      </div>

      </div>
    );
  }
}

export default App;