const UPDATE_VALUE_INCREMENT = 'UPDATE_VALUE_INCREMENT';
const UPDATE_VALUE_DECREMENT = 'UPDATE_VALUE_DECREMENT';

export const valueOfCountReducer = (initialState, action) => {
    let state = { ...initialState }
    switch (action.type) {
        case UPDATE_VALUE_INCREMENT:
            if (state.value >= 100) {
                alert('Бро, уже много, убавляй.')
                return state
            } else {
                state.value += 1
                return state;
            }
        case UPDATE_VALUE_DECREMENT:
            if (state.value < 1) {
                alert("Невозможно меньше нуля")
                return state
            } else {
                state.value -= 1
                return state;
            }

        default:
            return state
    }
}