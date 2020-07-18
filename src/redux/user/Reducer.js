import {SET_NAME} from './Actions'

const userState = {
    name: 'asd'
}

export const userReducer = (state = userState, action) => {
    console.log(action)
    switch(action.type){
        case SET_NAME:{
            console.log(action.payload)
            state.name = action.payload
            return{...state}
        }
        default: return{...state}
    }
}