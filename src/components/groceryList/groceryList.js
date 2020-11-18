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
        <button>Add Item to List</button>
        <input type="number" onChange={(event) => this.setState({groceryList:event.target.value})}/>
        <button>Shopped?</button>
        <button>Delete Item</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);