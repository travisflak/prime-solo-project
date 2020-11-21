import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './groceryList.css';

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

    componentDidUpdate() {

        if (this.props.store.user !== this.state.user){
            this.setState({groceryList: this.props.store.groceryListItems, user: this.props.store.user})
            console.log(this.props.store.groceryListItems !== this.state.groceryList);
        
        }
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
            return 'shopped'
        }
        else{return 'notShopped'}
    }

  render() {
    return (
      <div>

        <header>
            <button onClick={() => this.props.history.push('/addItem')}>Add Item to List</button>
            <button onClick={() => this.refreshShopped()}>Refresh Shopped Items</button>
        </header>
        
        <ol>
        {/* //map through graoceryItem */}
            {this.props.store.groceryListItems.map((groceryItem) => {
                console.log(groceryItem);
                
                return(
                <li className={this.checkIfShopped(groceryItem.shopped)}>{groceryItem.item}
                    <input type="number" defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <button onClick={() => this.toggleShopped(groceryItem)}>Shopped?</button>
                    <p>{this.checkIfShopped(groceryItem.shopped)}</p>
                    <button onClick={() => this.deleteItem(groceryItem.id)}>Delete Item</button>
                </li>)
                
            })}
        </ol>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);