import {Types} from './index'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    page: 0,
    totalPage: 0,
    list: [],
});

function Recommend(state = defaultState, action) {
    switch (action.type) {
        case Types.INIT_FIRST_PAGE:
            return state.merge({
                'page': action.page,
                'totalPage': action.totalPage,
                'list': action.list
            });
        default:
            return state
    }
}

export default Recommend