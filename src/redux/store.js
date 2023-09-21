import { valueOfCountReducer } from "./reducers/valueOfCountReducer"



let store = {
    _initialState: {
        valueOfCount: {
            value: 0
        }
    },
    getState() {
        return this._initialState
    },
    _callSubscriber() {
        // здесь будет подписчик 
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._initialState.valueOfCount = valueOfCountReducer(this._initialState.valueOfCount, action)
        this._callSubscriber(this._initialState)
    }


}

export default store;