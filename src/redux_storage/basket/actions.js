import types from './types'

const add = item => ({
    type: types.ADD_TO_BASKET, item
});

const reset = () => ({
    type: types.RESET_BASKET
});

export default {add, reset};