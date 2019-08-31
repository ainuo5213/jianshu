import {Types} from './index'
import {fromJS} from 'immutable'

export const initLength = (list) => ({type: Types.INIT_LENGTH, images: fromJS(list), len: list.length});

export const initWidth = (width) => ({type: Types.INIT_WIDTH, width});

export const changeMoving = (flag) => ({type: Types.CHANGE_MOVING, isMoving:flag});

export const changeCurrent = (current) => ({type: Types.CHANGE_CURRENT, current});

export const changeMouseIn = (flag) => ({type: Types.CHANGE_MOUSEIN, mouseIn:flag});
