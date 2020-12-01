import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gorceryListSaga from './groceryList.saga';
import groceryAddItem from './groceryAddItem.saga';
import deleteItemSaga from './deleteItem.saga';
import refreshShoppedSaga from './refreshShopped.saga.js';
import deleteUserSaga from './deleteUser.saga';

// rootSaga is the primary saga.
// bundle up all of the other sagas so the project can use them.
// imported in index.js as rootSaga

// registration triggers a login
// and login triggers setting the user
//register all sagas
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gorceryListSaga(),
    groceryAddItem(),
    deleteItemSaga(),
    refreshShoppedSaga(),
    deleteUserSaga(),
  ]);
}
