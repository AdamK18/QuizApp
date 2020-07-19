import {APPEND_LIST, REMOVE_ITEM} from './Actions'

const roundState = {
    list: []
}

export const roundReducer = (state = roundState, action) =>{
    switch(action.type){
        case APPEND_LIST:
            state.list.unshift(action.payload)
            return {...state}
        case REMOVE_ITEM:
            state.list.splice(action.payload, 1)
            return {...state}
        default: 
            return {...state}
    }
}