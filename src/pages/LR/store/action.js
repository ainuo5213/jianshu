import {Types} from './index'
import {doReg} from '../../../api/requset'


export const changeState = (state, value) => ({type: Types.CHANGE_STATE, key: state, value});

const regAction = (data, username) => ({
    type: Types.UPDATE_STATE,
    msg: data.msg,
    username: data.code === 0 ? username : ''

});
export const doRegister = ({username, password, phone_number}) => {
    return async dispatch => {
        const data = await doReg('/doRegister', {
            username, password, phone_number
        });
        dispatch(regAction(data, username));
        return data;
    }
};

export const handleBlur = (state, username) => {
    return async dispatch => {
        const data = await doReg('/checkExit', {username});
        //{code: 0, msg: "不存在该用户，可以注册"}
        dispatch({type: Types.CHECK_EXIT, msg: data.msg});
        return data;
    }
};

export const checkValidate = (state, value) => ({
    type: Types.CHECK_VALIDATE,
    state,
    value
});