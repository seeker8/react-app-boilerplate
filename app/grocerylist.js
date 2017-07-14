import React from 'react';
import ListItem from './listitem';

export default class GroceryList extends React.Component {
  render() {
    return (<ul>
      <ListItem quantity="1">Bread </ListItem>
      <ListItem quantity="6">Eggs</ListItem>
      <ListItem quantity="2">Milk</ListItem>
    </ul>);
  }
}