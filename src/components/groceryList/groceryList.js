import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './groceryList.css';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const rightArrowIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />
const minusSquare = <FontAwesomeIcon icon={faMinusSquare} />

class groceryList extends Component {

    state = {
        groceryList: [
            
        ],
        user: 0,

        newItem: {  
            item: '',
            quantity: 0,
            shopped: false,
        }
    };

    componentDidMount() {
    this.getGroceries();
    }
    
    getGroceries() {
        console.log('in getGroceries');
    
        this.props.dispatch({type: 'FETCH_GROCERIES'});
        this.setState({groceryList: this.props.store.groceryListItems});
    }
    //delete function for delting a row in the groceries table
    deleteItem(deletingItem) {
        
        this.props.dispatch({type: 'DELETE_GROCERIES', payload: {id: deletingItem}})
    }

    toggleShopped(groceryItem) {
        
        this.props.dispatch({type: 'REFRESH_SHOPPED', payload: groceryItem})
        this.getGroceries()
    }

    checkIfShopped(isItShopped) {
        if(isItShopped === true) {
            return (
                <div className='shopped'>
                <p>This item is in your shopping cart.</p>
                </div>
                )
            
        }
        else{
            return (
                <div className='notShopped'>
                <p>NOT shopped!</p>
                </div>
                )
        
        }
    }

  render() {
    return (
      <div>

        <header>
            {/* button for user to click and pushes them to the addItem page */}
    <Button color="primary" onClick={() => this.props.history.push('/addItem')}> Add Item to your List<span className="addButton">{rightArrowIcon}</span></Button>
        </header>
        
        <ol>
        {/* //map through graoceryItem */}
            {this.props.store.groceryListItems.map((groceryItem) => {
                console.log(groceryItem);
                
                return(
                <li className={this.checkIfShopped(groceryItem.shopped)}>{groceryItem.item}
                    <input type="number" min={0} defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <Button color="primary" onClick={() => this.toggleShopped(groceryItem)}>Shopped?</Button>
                  <div>
                    {this.checkIfShopped(groceryItem.shopped)}
                  </div>
                    <Button color="secondary" onClick={() => this.deleteItem(groceryItem.id)}>Delete Item<span className="deleteButton">{minusSquare}</span></Button>
                </li>)
                
            })}
        </ol>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);