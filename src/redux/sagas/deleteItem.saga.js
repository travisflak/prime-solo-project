import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteGroceryItem(action){
    
    try{
        console.log('hello from deleteGroceryItem:', action.payload);
    // use string interpolation to pass the payload
    yield axios.delete(`/api/groceryList/${action.payload.id}`)
    
    yield put({type: 'FETCH_GROCERIES'});
    } catch (error){
        console.log('error in post', error);
    }
  }


function* deleteItemSaga() {
    yield takeLatest('DELETE_GROCERIES', deleteGroceryItem);
  }

  export default deleteItemSaga;