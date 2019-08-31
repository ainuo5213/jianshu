import {fromJS} from 'immutable'
import {Types} from './index'
import {request} from '../../../api/requset'
const changeList = (res, page) => ({
    type: Types.INIT_FIRST_PAGE,
    page: page,
    list: fromJS(res.data),
    totalPage: res.totalPage
});

export const initPage = (page) => {
    return async (dispatch) => {
        const data = await request('/getWriter', page);
        const action = changeList(data, page);
        dispatch(action)
    }
};

