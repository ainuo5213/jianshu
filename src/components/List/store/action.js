import {Types} from './index'
import {request} from "../../../api/requset";
import {fromJS} from 'immutable'

const changeList = (data, page, fn) => {
    if (fn === 'first') {
        return {
            type: Types.INIT_FIRST_DETAIL,
            totalPage: data.totalPage,
            page,
            list: fromJS(data.detailArr)
        }
    }else {
        return {
            type: Types.INIT_NEXT_DETAIL,
            page,
            list: data.detailArr
        }
    }
};

export const initFirstDetail = (page, fn) => {
    return async dispatch => {
        const data = await request('/getDetail', page);
        const action = changeList(data, page, fn);
        dispatch(action)
    }
};

export const changeTips = () => ({type: Types.CHANGE_TIPS});