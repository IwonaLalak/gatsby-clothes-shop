import actions from "./actions";

export const addToBasket = item =>
    async (dispatch) => {
        await dispatch(actions.add(item))
    };

export const resetBasket = () =>
    async (dispatch) => {
        await dispatch(actions.reset())
    };