import {GET_ROUND} from './Actions'

const initialState = {
    question: 'ASD',
    answerA: 'ASD',
    answerB: 'ASD',
    answerC: 'ASD',
    answerD: 'ASD'
}

export const roundReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ROUND:
            return state
        default: return state
    }
}