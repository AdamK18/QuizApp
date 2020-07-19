export const APPEND_LIST = 'APPEND_LIST'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const appendList = (payload) => {
    return {
        type: APPEND_LIST,
        payload: payload
    }
}

export const removeFromList = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload: payload
    }
}