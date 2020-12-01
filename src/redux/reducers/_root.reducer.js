import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import groceryListItems from './groceryList.reducer';
import fetchUsers from './secretAdmin.reducer';

// primary reducer for this entire project
// It bundles up all of the other reducers so this project can use them.
// This is imported in index.js as rootSaga

// Create a bigger object for our store, with the objects from the reducers.

//Add the reducer to the rootReducer in order for it to register
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  groceryListItems,
  fetchUsers,
});
//use this inside of the code
//like this.props.store.loginMessage
export default rootReducer;
