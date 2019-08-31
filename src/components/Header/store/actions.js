/*
* 包含n个action creator
* 异步action：返回函数
* 同步action：返回对象（dispatch）
* */
import axios from 'axios'
import {Types} from './index'
import {fromJS} from 'immutable'

const changeList = data => ({
    type: Types.CHANGE_LIST,
    list: fromJS(data),//保持数据的immutable
    totalPage: Math.ceil(data.length / 10)
});

export const handleFocus = (focused) => ({'type': Types.HANDLE_FOCUS, focused: focused});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const {data, status} = res.data;
            if (status) {
                const action = changeList(data);
                dispatch(action)
            }
        }).catch(err => console.log(err))
    }
};

export const changeMouseEnter = (mouseIn) => ({type: Types.CHANGE_MOUSE_ENTER, mouseIn: fromJS(mouseIn)});

export const changePage = (page) => ({type: Types.CHANGE_PAGE, page: fromJS(page)});