const UPDATE_VALUE_INCREMENT = 'UPDATE_VALUE_INCREMENT';
const UPDATE_VALUE_DECREMENT = 'UPDATE_VALUE_DECREMENT';

export const ActionCreator = {
    updateValueOfCounterINCREMENT() {
        return {
            type: UPDATE_VALUE_INCREMENT
        }
    },
    updateValueOfCounterDECREMENT() {
        return {
            type: UPDATE_VALUE_DECREMENT
        }
    },


}