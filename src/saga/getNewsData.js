import { actionsType, renderNewsData} from '../actionType/action'
import {put , takeEvery, call, fork} from 'redux-saga/effects'
import {post} from '../Helper/HTTPHelper'

function* getNewsData(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801ae50ae7c5473b88015867f3d3c77d'
    
    const data = yield call(post, url)
    
    if(!data){
        alert('Error')
        return
    }
    
    yield put(renderNewsData(data.articles))
}

function* action2(){
    yield takeEvery(actionsType.SAGA_GET_DATA, getNewsData)
}

export default fork(action2)