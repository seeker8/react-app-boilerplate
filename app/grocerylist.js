import React from 'react';
import ListItem from './listitem';

export default class GroceryList extends React.Component {
  render() {
    return (<ul>
      <ListItem quantity="1" name="Bread" />
      <ListItem quantity="6" name="Eggs" />
      <ListItem quantity="2" name="Milk" />
    </ul>);
  }
}