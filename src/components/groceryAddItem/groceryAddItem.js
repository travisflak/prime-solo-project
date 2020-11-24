import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './groceryAddItem.css';

//add const fa components
const plusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const backToListArrow = <FontAwesomeIcon icon={faArrowAltCircleLeft} />

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

  // onHandleSubmit(e) {
  //   e.preventDefault();
  //   const item = this.state.item;
  //   this.props.onItemChange(item);
  //   this.setState({
  //     item: ''
  //   });
  // }

  backToGroceryList = () => {
      this.props.history.push('/groceryList')
  }

  addNewGroceries = () => {
    this.props.dispatch({type: 'ADD_GROCERIES', payload: this.state.newItem});
  }

  render() {
    return (
        <div className="addItemBody">
        <h3 className="h3Header">Add items to your grocery shopping list:</h3>
        <header>
            <Button className="backToListBtn" color="primary" onClick={this.backToGroceryList} ><span className="backToListArrow">
            {backToListArrow}</span>Back to Grocery List</Button>
        </header>
        <input type="text" onChange={(event) => this.handleChange(event, 'item')}/>
        <input type="number" min={0} onChange={(event) => this.handleChange(event, 'quantity')}/>
        <Button className="addItemText" color="primary" onClick={this.addNewGroceries} >Add Groceries to List<span className="addButton">{plusSquare}</span></Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(groceryAddItem))