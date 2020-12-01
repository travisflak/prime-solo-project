import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const LogOutButton = (props) => (
  <button
    // the className is passed to it from it's parents through React props
    className={props.className}
    onClick={() => {
      props.dispatch({ type: 'LOGOUT' });
      props.history.push('/groceryList');
    }}

  >
    Log Out
  </button>
);

// this component still needs 'connect' because it is going to dispatch a redux action
export default withRouter (connect()(LogOutButton));
