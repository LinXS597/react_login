import React from 'react'
import ReactDOM from 'react-dom'

// 配合applyMiddleware解决redux异步问题
import thunk from 'redux-thunk'

// createStore接受reducer生成stote compose合并生成store其他数据 applyMiddleware接受thunk解决redux异步问题
import {createStore, compose, applyMiddleware} from 'redux'

// Provider负责传递store
import {Provider} from 'react-redux'

// 引入react-router-dom各种路由元素
import {BrowserRouter as Router, Route} from 'react-router-dom'

// 引入判断是否登录组件
import CheckLogin from './components/checkLogin/CheckLogin'

// 引入页面路由组件
import Login from './containers/login/login'

// 生成store
import reducer from './reducer'

const store = createStore(reducer, compose(
    applyMiddleware(thunk), //解决redux异步问题
    window.devToolsExtension ? window.devToolsExtension() : f => f // chrome控制台redux工具
))

// 页面渲染
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="react-login-register">
                <CheckLogin></CheckLogin>
                <Route path='/login' component={Login}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)