import {combineReducers, createStore,applyMiddleware} from 'redux';
import mainReducer from '../Reducers/MainReduser';
import artistReducer from '../Reducers/ArtistReducer';
import searchReducer from '../Reducers/SearchReduser';


import thunkMiddleware from 'redux-thunk';

let RootReducers = combineReducers({
    data: mainReducer,
    dataArtist: artistReducer,
    dataSearch: searchReducer

})

let store = createStore(RootReducers,applyMiddleware(thunkMiddleware));
export default store;


