import { actionsType, renderNewsData, renderData} from '../actionType/action'
import {put , takeEvery, call, fork, all} from 'redux-saga/effects'
import {post} from '../Helper/HTTPHelper'

function* getNewsData(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801ae50ae7c5473b88015867f3d3c77d'
    
    const data = yield call(post, url)
    
    if(!data){
        alert('Error')
        return
    }
    
    // alert(data)

    yield put(renderNewsData(data.articles))
}

function* action2(){
    yield takeEvery(actionsType.GET_NEWS_DATA, getNewsData)
}

export default fork(action2)