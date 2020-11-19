import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addGroceries(action){
    console.log('hello from addGroceryItem', action.payload);
    try{
    yield axios.post('/api/plant', action.payload)
    yield put({type: 'SET_GROCERIES'});
    } catch (error){
        console.log('error in post', error);
    }
  }


  function* groceryAddItems() {
    yield takeLatest('SET_GROCERIES', addGroceries);
  }

  export default groceryAddItems;