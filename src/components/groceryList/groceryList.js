import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class groceryList extends Component {

    componentDidMount() {
    this.getGroceries();
    }
    
    getGroceries() {
        console.log('in getGroceries');
    
        this.props.dispatch({type: 'FETCH_GROCERIES'});
    }

  state = {
    heading: 'Grocery List',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <header>
            <button onClick={() => this.props.history.push('/addItem')}>Add Item to List</button>
            <button>Refresh Shopped Items</button>
        </header>
        <input type="number" onChange={(event) => this.setState({groceryList:event.target.value})}/>
        
        
        <ol>
            {this.props.store.groceryListItems.map((groceryItem) => {
                return(
                <li>{groceryItem.item}{groceryItem.quantity}
                    
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