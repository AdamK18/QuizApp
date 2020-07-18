import {roundReducer} from './round/Reducer'
import {userReducer} from './user/Reducer'
import { combineReducers, createStore } from 'redux';

const store = createStore(combineReducers(
    {
        round: roundReducer,
        user: userReducer
    }
),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store