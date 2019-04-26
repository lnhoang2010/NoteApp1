import { actionsType } from '../actionType/action';
const initialState = {
    data: [],
}

const addData = (state = initialState, action) => {
    let newData = [...state.data];

    switch (action.type) {
        case actionsType.ADD_DATA:
            let newObject = { text: action.text, tabColor: 'white', choosen: false }
            newData.push(newObject)
            return Object.assign({}, state.data, { data: newData })

        case actionsType.EDIT_DATA:
            let newObject1 = { text: action.text, tabColor: 'white', choosen: false }
            newData[action.index] = newObject1;
            return Object.assign({}, state.data, { data: newData })

        case actionsType.DELETE_DATA:
            var newArray = []
            if (action.index.length > 1) {
                for (let i = 0; i < newData.length; i++) {
                    if (!action.index.includes(i)) {
                        newArray.push(newData[i])
                    }
                }
                return Object.assign({}, state.data, { data: newArray })
            }
            else {
                newData.splice(action.index, 1);
                return Object.assign({}, state.data, { data: newData })
            }


        case actionsType.CHANGE_TAB_COLOR:
                if (action.index.length) {
                    for (let i = 0; i < action.index.length; i++) {
                        if (newData[action.index[i]].tabColor == 'white') {
                            newData[action.index[i]] = { text: newData[action.index[i]].text, tabColor: '#33b4e5', choosen: !state.data[action.index[i]].choosen }
                        }
                        else {
                            newData[action.index[i]] = { text: newData[action.index[i]].text, tabColor: 'white', choosen: !state.data[action.index[i]].choosen }
                        }
                    }
                }
                else {
                    if (newData[action.index].tabColor == 'white') {
                        newData[action.index] = { text: newData[action.index].text, tabColor: '#33b4e5', choosen: !state.data[action.index].choosen }
                    }
                    else {
                        newData[action.index] = { text: newData[action.index].text, tabColor: 'white', choosen: !state.data[action.index].choosen }
                    }
                }
            return Object.assign({}, state.data, { data: newData })

        case actionsType.CHOOSE_ALL:
            for (let i = 0; i < newData.length; i++) {
                newData[i] = { text: newData[i].text, tabColor: '#33b4e5', choosen: true }
            }
            return Object.assign({}, state, { data: newData })

        case actionsType.LOAD_SAVED_DATA:
            var newData1 = []
            if (action.data) {
                for(i = 0; i < action.data.length; i++){
                    var newObject2 = {text: action.data[i].text, tabColor: 'white', 'choosen': false};
                    newData1.push(newObject2)
                }
                return Object.assign({}, state, {data: newData1})
            }
            else {
                return Object.assign({}, state.data, {data: []})
            }

        default:
            return state;
    }
}

export default addData;