import action1 from './getAPIData'
import action2 from './getNewsData'
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        action1,
        action2
    ]);
}