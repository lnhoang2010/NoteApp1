import Store from '../store'
import { AsyncStorage, Alert } from 'react-native';
import { changeHeader1State, changeTabColor, chooseAll, deleteData, loadSavedData } from '../actionType/action'

let currentValue

class Screen1Helper {
    static select(state) {
        return state.addData.data
    }

    static handleChange = () => {
        let previousValue = currentValue
        currentValue = this.select(Store.getState())

        if (previousValue !== currentValue) {
            AsyncStorage.setItem('data', JSON.stringify(currentValue))
        }
    }

    static listenChangeData = () => {
        Store.subscribe(this.handleChange)
    }

    static loadData = async () => {
        try {
            const value = await AsyncStorage.getItem('data');
            if (value !== null) {
                Store.dispatch(loadSavedData(JSON.parse(value)))
            }
        } catch (error) {
            alert(error)
        }
    }

    static onLongPressed(index, data){
        var needToChangeHeader = true
        var choosenNote = 0
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].choosen) {
                needToChangeHeader = false;
                choosenNote ++
            }
        }
        
        if(choosenNote == 1 && data[index].choosen){
            Store.dispatch(changeHeader1State())
        }

        Store.dispatch(changeTabColor(index))

        if (needToChangeHeader) {
            Store.dispatch(changeHeader1State())
        }
    }

    static onCreateClicked(headerState, data){
        if (headerState.showDeleteButton) {
            Store.dispatch(changeHeader1State())
        }

        var needToChangeColor = []
        if (data.length) {
            for (i = 0; i < data.length; i++) {
                if (data[i].tabColor != 'white') {
                    needToChangeColor.push(i)
                }
            }

            if (needToChangeColor.length) {
                Store.dispatch(changeTabColor(needToChangeColor))
            }
        }
    }

    static onChooseAllClicked(data){
        if(data.length){
            Store.dispatch(chooseAll());
            Store.dispatch(changeHeader1State())
        }
        else{
            Alert.alert(
                'Error',
                'There is no data'
            )
        }
    }

    static onDeleteClicked(data){
        var needToDelete = []

        for (let i = 0; i < data.length; i++) {
            if (data[i].choosen) {
                needToDelete.push(i)
            }
        }

        Store.dispatch(deleteData(needToDelete));
        Store.dispatch(changeHeader1State())
    }
}

export default Screen1Helper