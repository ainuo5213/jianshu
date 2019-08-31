import {fromJS} from 'immutable'
import {Types} from './index'

const defaultState = fromJS({
    page: 0,
    totalPage: 0,
    list: [],
    tips: '阅读更多',
    canLoadMore: true
});

function DetailList(state = defaultState, action) {
    switch (action.type) {
        case Types.INIT_FIRST_DETAIL:
            return state.merge({
                page: action.page,
                totalPage: action.totalPage,
                list: action.list
            });
        case Types.CHANGE_TIPS:
            return state.merge({
                'tips': '没有更多的数据了',
                'canLoadMore': false
            });
        case Types.INIT_NEXT_DETAIL:
            const list = state.get('list');
            let newList = list.toJS();
            return state.merge({
                page: action.page,
                list: fromJS([...newList, ...action.list])
            });
        default:
            return state
    }
}

export default DetailList