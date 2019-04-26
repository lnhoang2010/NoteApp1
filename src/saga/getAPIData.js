import {put , takeEvery, call, fork, all} from 'redux-saga/effects'
import { actionsType, renderData} from '../actionType/action'
import { post} from '../Helper/HTTPHelper'

function* getDataSaga(){
    var url = 'https://facebook.github.io/react-native/movies.json'
    
    const data = yield call(post, url)
    
    if(!data){
        alert("Network error")
        return
    }

    yield put(renderData(data.movies))
}

function* action1(){
    yield takeEvery(actionsType.SAGA_GET_DATA, getDataSaga);
}

export default fork(action1)