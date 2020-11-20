import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class groceryList extends Component {

    state = {
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
    }

    deleteItem(deletingItem) {
        console.log(deletingItem);
        
        this.props.dispatch({type: 'DELETE_GROCERIES', payload: {id: deletingItem}})
    }

  render() {
    return (
      <div>

        <header>
            <button onClick={() => this.props.history.push('/addItem')}>Add Item to List</button>
            <button onClick={(event) => this.setState({groceryList:event.target.value})}>Refresh Shopped Items</button>
        </header>
        
        <ol>
        {/* //map through graoceryItem */}
            {this.props.store.groceryListItems.map((groceryItem) => {
                return(
                <li>{groceryItem.item}
                    <input type="number" defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <button onClick={(event) => this.state()}>Shopped?</button>
                    <button onClick={() => this.deleteItem(groceryItem.id)}>Delete Item</button>
                </li>)
                
            })}
        </ol>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);