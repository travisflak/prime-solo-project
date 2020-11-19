import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class groceryAddItem extends Component {
  state = {
    heading: 'Add Some Groceries!',
  };

  render() {
    return (
        <div>
        <h2>{this.state.heading}</h2>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <header>
            <button>Back to Grocery List</button>
        </header>
        <input type="number" onChange={(event) => this.setState({groceryList:event.target.value})}/>
        <button>Add Groceries to List</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryAddItem);