//redux-immutable提供的combineReducers，生成的内容是一个immutable的数据，
// 可以像具体的reducer一样通过set和get操作state
import {combineReducers} from 'redux-immutable'
import {combineReducers} from 'redux'
import {HeaderReducer} from '../components/Header/store'
import {recommendReducer} from '../components/Recommend/store'
import {DetailList} from '../components/List/store'
import {backTopReducer} from '../components/BackTop/store'
import {lrReducer} from '../pages/LR/store'
//引入各大reducer
export default combineReducers({
    header: HeaderReducer,
    recommend: recommendReducer,
    detail: DetailList,
    backTop: backTopReducer,
    lr: lrReducer
});