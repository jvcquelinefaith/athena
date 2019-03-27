import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="backgoundImg" src={require('./WIC.png')}/>
          <img className="sideCircle" src={require('./circle.png')}/>
        </header>
      </div>
    );
  }
}

export default App;
