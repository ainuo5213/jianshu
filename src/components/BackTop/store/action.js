import {Types} from './index'

export const changeIn = flag => ({type:Types.CHANGE_IN, isIn: flag});

export const changeShow = flag => ({type:Types.CHANGE_SHOW, isShow: flag});