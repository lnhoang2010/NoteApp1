import { actionsType } from '../actionType/action'

const initState = { showLoading: false }

const changeLoadingState = (state = initState, action) => {
    let newState = {...state}

    switch (action.type) {
        case actionsType.CHANGE_LOADING_STATE:
            newState = { showLoading: !newState.showLoading }
            return Object.assign({}, state, newState)

        default:
            return state
    }
}

export default changeLoadingState;

