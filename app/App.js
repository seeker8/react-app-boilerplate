import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloWorld from './helloworld';
import GroceryList from './grocerylist';

class App extends Component {
  render() {
    return (
      <GroceryList />
    );
  }
}

render(<App />, document.getElementById('root'));
