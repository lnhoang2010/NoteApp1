import Store from '../store'
import { editData, addData } from '../actionType/action'

export default class Screen2Helper {
    static onSaveClicked(index, text) {
        if (index || index == 0) {
            Store.dispatch(editData(text, index))
        }
        else {
            Store.dispatch(addData(text))
        }
    }
}