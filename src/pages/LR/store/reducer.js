import {fromJS} from 'immutable'
import {Types} from './index'

let defaultState = fromJS({
    lr: '',
    username: '',
    phone_number: '',
    password: '',
    valid: {
        username: true,
        phone_number: true,
    },
    msg: ''
});

function lr(state = defaultState, action) {
    switch (action.type) {
        case Types.CHANGE_STATE:
            return state.set(action.key, action.value);
        case Types.UPDATE_STATE: //注册成功，只留下username
            return state.merge({
                lr: '',
                phone_number: '',
                password: '',
                msg: action.msg,
                username: action.username
            });
        case Types.CHECK_VALIDATE:
            return state.set(action.state, action.value);
        case Types.CHECK_EXIT:
            return state.set('msg', action.msg);
        default:
            return state
    }
}

export default lr