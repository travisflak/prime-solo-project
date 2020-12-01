import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// sagas for refreshing all shopped items

function* refreshShopped(action){
    
    try{
        console.log('hello from refreshShopped saga:');

    yield axios.put(`/api/groceryList/`, action.payload)
    
    yield put({type: 'FETCH_GROCERIES'});
    } catch (error){
        console.log('error in put', error);
    }
  }

  function* refreshAllShopped(){
    try{
      yield axios.put(`/api/groceryList/all`)
  
    yield put({type: 'FETCH_GROCERIES'});
    } catch (error){
        console.log('error in put', error);
    }
  }

//watcher
function* refreshShoppedSaga() {
    yield takeLatest('REFRESH_SHOPPED', refreshShopped);
    yield takeLatest('REFRESH_ALL_SHOPPED', refreshAllShopped);
  }

  export default refreshShoppedSaga;