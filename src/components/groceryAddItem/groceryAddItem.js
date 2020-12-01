import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './groceryAddItem.css';
import swal from 'sweetalert';


//add const fa components
const plusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const backToListArrow = <FontAwesomeIcon icon={faArrowAltCircleLeft} />

class groceryAddItem extends Component {
  //local state
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
  //function to push the user back to the grocery list page
  backToGroceryList = () => {
      this.props.history.push('/groceryList')
  }

  //function for adding new grocery items
  addNewGroceries = () => {
    console.log(this.state.newItem);
    swal("you added an item!", "You can click Back to Grocery List to see the item that you added.", "success");
    if (this.state.newItem.item !== '') {
      this.props.dispatch({type: 'ADD_GROCERIES', payload: this.state.newItem});
    }
    else {
      swal("Uh oh!", "You must enter an item, and/or click Back to Grocery List.", "error");
    }
  }

  render() {
    return (
      <div className="addItemBody">
        <header>
            <Button className="backToListBtn" color="primary" onClick={this.backToGroceryList} ><span className="backToListArrow">
            {backToListArrow}</span>Back to Grocery List</Button>
        </header>
        <input className="itemInput" type="text" placeholder="ITEM" onChange={(event) => this.handleChange(event, 'item')}/>
        <input className="numberInput" type="number" placeholder="QUANTITY" min={0} onChange={(event) => this.handleChange(event, 'quantity')}/>
        <Button className="addItemText" color="primary" onClick={this.addNewGroceries} >Add Groceries to List<span className="addButton">{plusSquare}</span></Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(groceryAddItem))