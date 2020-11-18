import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//comment what this is doing
function* fetchGroceries(action){
    console.log('hello from addGarden:', action.payload);
    try{
    yield axios.post('/api/groceryList/addItem', action.payload)
    yield put({type: 'SET_GROCERIES'});
    } catch (error){
        console.log('error in post', error);
    }
  }


function* groceryListSaga() {
    yield takeLatest('FETCH_GROCERIES', fetchGroceries);
  }


  export default groceryListSaga;