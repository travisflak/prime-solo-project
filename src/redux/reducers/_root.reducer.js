import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import groceryListItems from './groceryList.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'

//you MUST add the reducer to the rootReducer in order for it to register, otherwise it will not work
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  groceryListItems,
});
//when we use this inside of our code we'll be using something like this.props.store.whatever name is here (eg user, or errors), 
//so it would be like this.props.store.loginMessage
export default rootReducer;
