import React, { Component } from 'react';
import logo from './logo.svg';
import GSAP from 'react-gsap-enhancer'
import './App.css';

@GSAP()
class App extends Component {

  onClick = this.onClick.bind(this)
  onClick() {
    this.addAnimation(() => {
      return TweenLite.to(window, 2, { scrollTo: '#div' })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          <button onClick={this.onClick}>Click to Scroll Down</button>
        </p>

        <div style={{ height: 1000, width: '100%' }} />
        <div id='div'>ScrollTo Here</div>
      </div>
    );
  }
}

export default App;
