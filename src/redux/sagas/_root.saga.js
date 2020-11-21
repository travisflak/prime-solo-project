import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gorceryListSaga from './groceryList.saga';
import groceryAddItem from './groceryAddItem.saga';
import deleteItemSaga from './deleteItem.saga';
import refreshShoppedSaga from './refreshShopped.saga.js';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
//it doesn't matter what saga you create, it won't register if you don't add it to the yield all array below
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gorceryListSaga(),
    groceryAddItem(),
    deleteItemSaga(),
    refreshShoppedSaga(),
  ]);
}
