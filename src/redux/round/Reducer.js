import {APPEND_LIST} from './Actions'

const roundState = {
    list: [
    {question: 'Question1',
    answers: ['Answer1','Answer2','Answer3','Answer4'],
    correct: 1},
    
    {question: 'Question2',
    answers: ['Answer1','Answer2','Answer3','Answer4'],
    correct: 2,}
    ]
}

export const roundReducer = (state = roundState, action) =>{
    switch(action.type){
        case APPEND_LIST:
            state.list.unshift(action.payload)
            return {...state}
        default: 
            return {...state}
    }
}