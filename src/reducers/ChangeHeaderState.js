import {actionsType} from '../actionType/action';

const initState = {
    headerState : {
        showDeleteButton: false,
        showOtherButtons: true
    }
}

const changeHeaderState = (state = initState, action) => {
    let newState = {...state.headerState}

    switch (action.type){
        case actionsType.CHANGE_HEADER1_STATE:
            newState = {showDeleteButton: !state.headerState.showDeleteButton, showOtherButtons: !state.headerState.showOtherButtons}
            return Object.assign({}, state, {headerState: newState})
        
        default:
            return state     
    }
}

export default changeHeaderState;
