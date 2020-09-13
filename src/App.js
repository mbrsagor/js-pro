import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import './style/style.css';
import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
}

export default App;
