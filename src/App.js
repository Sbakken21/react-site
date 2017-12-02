import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import About from './components/About';

import Navbar from './components/Navbar';

import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
