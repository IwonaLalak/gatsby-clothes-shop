import types from './types'

const INITIAL = {arr: []};

const basketReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET: {
            return {...state, arr: [...state.arr, action.item]}
        }
        case types.RESET_BASKET:
            return {arr: []};
        default:
            return state;
    }
};

export default basketReducer;