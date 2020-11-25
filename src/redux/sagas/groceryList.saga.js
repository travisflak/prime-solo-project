import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//generator function for getting the data in the groceries table
function* fetchGroceries(){
    console.log('hello from fetchGrocery:');
    try{
    const groceries = yield axios.get('/api/groceryList/')
    console.log('groceries', groceries.data);
    // let newGroceries=[]
    // for (let item of groceries.data){
    //   item.shopped=false
    //   newGroceries.push(item)
    // }
    yield put({type: 'SET_GROCERIES', payload: groceries.data});
    } catch (error){
        console.log('error in post', error);
    }
  }


function* groceryListSaga() {
    yield takeLatest('FETCH_GROCERIES', fetchGroceries);
  }


  export default groceryListSaga;