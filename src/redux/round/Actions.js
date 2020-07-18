export const APPEND_LIST = 'APPEND_LIST'

export const appendList = (payload) => {
    return{
        type: APPEND_LIST,
        payload: payload
    }
}