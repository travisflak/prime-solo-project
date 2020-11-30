import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteUser(action){
    
    try{
        console.log('hello from deleteUser:', action.payload);
    // use string interpolation to pass the payload
    yield axios.delete(`/api/secretAdmin/${action.payload.id}`)
    
    yield put({type: 'GET_USER'});
    } catch (error){
        console.log('error in post', error);
    }
  }

  function* fetchUser(){
    
    try{
        console.log('hello from fetchUser:');

    const user = yield axios.get('/api/secretAdmin/')

    yield put({type: 'SET_ADMIN_DATA', payload: user.data});

    // yield put({type: 'GET_USER'});
    
    } catch (error){
        console.log('error in post', error);
    }
  }


function* deleteUserSaga() {
    yield takeLatest('DELETE_USER', deleteUser);
    yield takeLatest('GET_USER', fetchUser);
  }

  export default deleteUserSaga;