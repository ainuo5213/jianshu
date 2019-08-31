import * as Types from './action-types'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    mouseIn: false,
    current: 0,
    width: 0,
    len: 0,
    images: [],
    isMoving: false
});

function Slider(state = defaultState, action) {
    switch (action.type) {
        case(Types.INIT_LENGTH):
            return state.merge({images: action.images, len: action.len});
        case(Types.INIT_WIDTH):
            return state.set('width', action.width);
        case(Types.CHANGE_MOUSEIN):
            return state.set('mouseIn', action.mouseIn);
        case(Types.CHANGE_CURRENT):
            return state.set('current', action.current);
        case(Types.CHANGE_MOVING):
            return state.set('isMoving', action.isMoving);
        default:
            return state;
    }
}

export default Slider