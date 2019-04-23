import {actionsType} from '../actionType/action';

const initialState = {
    data: [],
}

const addData = (state = initialState, action) =>{
    // const {type, text} = action;
    let newData = [...state.data];

    switch (action.type) {
        case actionsType.ADD_DATA:
            let newObject = {text: action.text, textColor: 'black', tabColor: 'white'}
            newData.push(newObject)
            return Object.assign({}, state, {data: newData})
        
        case actionsType.EDIT_DATA:
            newData[action.index].text = action.text;
            return Object.assign({}, state, {data: newData})
 
        case actionsType.DELETE_DATA:
            newData.splice(action.index, 1);
            return Object.assign({}, state, {data: newData})

        case actionsType.CHANGE_TAB_COLOR:
            newData[action.index].tabColor = action.tabColor
            newData[action.index].textColor = action.textColor
            return Object.assign({}, state, {data: newData})

        default:
            return state;        
    }
}

export default addData;