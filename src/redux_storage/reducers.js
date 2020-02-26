import {combineReducers} from 'redux'
import basketReducer from "./basket";

const rootReducer = combineReducers({
    basket: basketReducer,
});

export default rootReducer