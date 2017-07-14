import React, { Component } from 'react';
import {render} from 'react-dom';
import HelloWorld from './helloworld';

class App extends Component {
  render(){
    return (
      <HelloWorld place="Zacatecas"/>
    );
  }
}

render(<App />, document.getElementById('root'));
