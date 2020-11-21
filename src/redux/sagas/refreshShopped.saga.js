import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* refreshShopped(action){
    
    try{
        console.log('hello from refreshShopped saga:');

    yield axios.put(`/api/groceryList/`, action.payload)
    
    yield put({type: 'FETCH_GROCERIES'});
    } catch (error){
        console.log('error in put', error);
    }
  }


function* refreshShoppedSaga() {
    yield takeLatest('REFRESH_SHOPPED', refreshShopped);
  }

  export default refreshShoppedSaga;