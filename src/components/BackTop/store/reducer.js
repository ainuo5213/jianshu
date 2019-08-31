import {fromJS} from 'immutable'
import {Types} from './index'

const defaultState = fromJS({
    isIn: false,
    isShow: false
});

function backTop(state = defaultState, action) {
    switch (action.type) {
        case Types.CHANGE_IN:
            return state.set('isIn', action.isIn);
        case Types.CHANGE_SHOW:
            return state.set('isShow', action.isShow);
        default:
            return state;
    }
}

export default backTop