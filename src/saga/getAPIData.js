import {put , takeEvery, call, fork} from 'redux-saga/effects'
import { delay } from 'redux-saga';
import { actionsType, renderNewsData} from '../actionType/action'
import { post} from '../Helper/HTTPHelper'

function* getDataSaga(){
    var url = 'https://facebook.github.io/react-native/movies.json'
    
    const data = yield call(post, url)
    // alert(JSON.stringify(data.movies))
    if(!data){
        alert("Network error")
        return
    }
    console.log(JSON.stringify(data))

    yield put(renderNewsData(data.movies))    
}

function* action1(){
    yield takeEvery(actionsType.GET_NEWS_DATA, getDataSaga);
}

export default fork(action1)