export const actionsType = {
    ADD_DATA: 'ADD_DATA',
    EDIT_DATA: 'EDIT_DATA',
    DELETE_DATA: 'DELETE_DATA',
    SAGA_GET_DATA: 'SAGA_GET_DATA',
    RENDER_DATA_FROM_SAGA: 'RENDER_DATA_FROM_SAGA',
    GET_NEWS_DATA: "GET_NEWS_DATA",
    RENDER_NEWS_DATA: "RENDER_NEWS_DATA",
    CHANGE_TAB_COLOR: 'CHANGE_TAB_COLOR',
    CHANGE_HEADER1_STATE: 'CHANGE_HEADER1_STATE',
    CHOOSE_ALL: 'CHOOSE_ALL',
    LOAD_SAVED_DATA: "LOAD_SAVED_DATA",
    CHANGE_LOADING_STATE: 'CHANGE_LOADING_STATE'
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

export function changeTabColor(index){
    return {type: actionsType.CHANGE_TAB_COLOR, index}
}

export function changeHeader1State(){
    return {type: actionsType.CHANGE_HEADER1_STATE}
}

export function chooseAll(){
    return {type: actionsType.CHOOSE_ALL}
}

export function loadSavedData(data){
    return {type: actionsType.LOAD_SAVED_DATA, data}
}

export function getNewsData(){
    return {type: actionsType.GET_NEWS_DATA}
}

export function renderNewsData(data){
    return {type: actionsType.RENDER_NEWS_DATA, data}
}

export function changeLoadingState(){
    return {type: actionsType.CHANGE_LOADING_STATE}
}