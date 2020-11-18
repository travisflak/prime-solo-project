import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//comment what this is doing
function* fetchGroceries(){
    console.log('hello from addGarden:');
    try{
    const groceries = yield axios.get('/api/groceryList/')
    yield put({type: 'SET_GROCERIES', payload: groceries});
    } catch (error){
        console.log('error in post', error);
    }
  }


function* groceryListSaga() {
    yield takeLatest('FETCH_GROCERIES', fetchGroceries);
  }


  export default groceryListSaga;