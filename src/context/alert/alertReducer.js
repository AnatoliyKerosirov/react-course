import { SHOW_ALERT, HIDE_ALERT } from "../types"


const handler = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handler[action.type] || handler.DEFAULT

    return handle(state, action)
}