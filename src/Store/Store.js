import {combineReducers, createStore,applyMiddleware} from 'redux';
import mainReducer from '../Reducers/MainReduser';
import otherCityReducer from '../Reducers/OtherCitysReduser';
import thunkMiddleware from 'redux-thunk';

let RootReducers = combineReducers({
    data: mainReducer,
    musicData: otherCityReducer
})

let store = createStore(RootReducers,applyMiddleware(thunkMiddleware));
export default store;

window.store = store;
