import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import { Button } from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class groceryAddItem extends Component {
  state = {
    newItem: {  
        item: '',
        quantity: 0,
        shopped: false,
    }
  };
//which param to enter into and take each value to put it in there
  handleChange = ( event, typeParam ) => {
      this.setState({
          newItem: {
              ...this.state.newItem,
              [typeParam]:event.target.value
          }
      })
      console.log(this.state);
  }

//   submitGroceriesBtn = () => {
//     console.log('grocery item', this.state);
    
//   }

  backToGroceryList = () => {
      this.props.history.push('/groceryList')
  }

  addNewGroceries = () => {
    this.props.dispatch({type: 'ADD_GROCERIES', payload: this.state.newItem});
  }

  render() {
    return (
        <div>
        <h3>Add grocery items to your list.</h3>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <header>
            <Button color="primary" onClick={this.backToGroceryList} >Back to Grocery List</Button>
        </header>
        <input type="text" onChange={(event) => this.handleChange(event, 'item')}/>
        <input type="number" min={0} onChange={(event) => this.handleChange(event, 'quantity')}/>
        <Button color="primary" onClick={this.addNewGroceries} >Add Groceries to List</Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(groceryAddItem))