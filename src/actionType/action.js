export const actionsType = {
    ADD_DATA: 'ADD_DATA',
    EDIT_DATA: 'EDIT_DATA',
    DELETE_DATA: 'DELETE_DATA',
    SAGA_GET_DATA: 'SAGA_GET_DATA',
    RENDER_DATA_FROM_SAGA: 'RENDER_DATA_FROM_SAGA',
    GET_NEWS_DATA: "GET_NEWS_DATA",
    RENDER_NEWS_DATA: "RENDER_NEWS_DATA",
    CHANGE_TAB_COLOR: 'CHANGE_TAB_COLOR'
} 

export function addData(text){
    return {type: actionsType.ADD_DATA, text}
}

export function editData(text, index){
    return {type: actionsType.EDIT_DATA, text, index}
}

export function deleteData(index){
    return {type: actionsType.DELETE_DATA, index}
}

export function sagaGetData(){
    return {type: actionsType.SAGA_GET_DATA}
}

export function renderData(data){
    return {type: actionsType.RENDER_DATA_FROM_SAGA, data}
}

export function getNewsData(){
    return {type: actionsType.GET_NEWS_DATA}
}

export function renderNewsData(data){
    return {type: actionsType.RENDER_NEWS_DATA, data}
}

export function changeTabColor(textColor, tabColor, index){
    return {type: actionsType.CHANGE_TAB_COLOR, tabColor, textColor, index}
}