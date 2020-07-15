import {roundReducer} from './round/Reducer'
import { combineReducers, createStore } from 'redux';

const store = createStore(combineReducers(
    {
        round: roundReducer
    }
));

export default store