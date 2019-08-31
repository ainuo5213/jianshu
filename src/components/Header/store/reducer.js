/*
* 包括n个reducer函数，根据老的state和指定的action返回一个新的state
* */
import {Types} from './index'
import {fromJS} from 'immutable'
//引入immutable库，是state不可被直接修改

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 0
});

//若要修改就要使用state.set，
//immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
//其中fromJS会将引用值obj转换为immutable map，array转换为immutable list，原始值不变
function Header(state = defaultState, action) {
    switch (action.type) {
        case Types.HANDLE_FOCUS:
            return state.set('focused', action.focused);
        case Types.CHANGE_LIST:
            return state.merge({//相当于调用了两次set
                list: action.list,
                totalPage: action.totalPage
            });
        case Types.CHANGE_MOUSE_ENTER:
            return state.set('mouseIn', action.mouseIn);
        case Types.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}

export default Header
