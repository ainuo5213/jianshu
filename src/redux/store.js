/*
* 核心管理模块，将reducers和组件进行关联
* */
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

export default createStore(reducers, applyMiddleware(thunk))
