import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addGroceries(action){
    console.log('hello from addGroceryItem', action.payload);
    try{
    yield axios.post('/api/groceryList', action.payload)
    // yield put({type: 'FETCH_GROCERIES'});
    } catch (error){
        console.log('error in post', error);
    }
  }

  function* groceryAddItems() {
    yield takeLatest('ADD_GROCERIES', addGroceries);

  }

  export default groceryAddItems;