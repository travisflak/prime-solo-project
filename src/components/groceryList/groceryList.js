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

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {/* <pre>{JSON.stringify(this.props.store.groceryListItems)}</pre> */}
        <header>
            <button onClick={() => this.props.history.push('/addItem')}>Add Item to List</button>
            <button>Refresh Shopped Items</button>
        </header>
        {/* <input type="number" onChange={(event) => this.setState({groceryList:event.target.value})}/> */}
        
        {/* {JSON.stringify(this.state.newItem.quantity)} */}
        
        <ol>
            {this.props.store.groceryListItems.map((groceryItem) => {
                return(
                <li>{groceryItem.item}
                    <input type="number" defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <button>Shopped?</button>
                    <button>Delete Item</button>
                </li>)
                
            })}
        </ol>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);