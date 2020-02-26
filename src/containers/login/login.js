import React, {Component} from 'react'
import './login.css'

class Login extends Component {
    render() {
        return (
            <div className="page-login">
                <br/>
                <br/>
                <h3>高考志愿推荐系统</h3>
                <br/>
                <br/>
                <div>
                    <input type="text" placeholder={"请输入账号"}/>
                </div>
                <br/>
                <div>
                    <input type="password" placeholder={"请输入密码"}/>
                </div>
                <div>
                    <button>登录</button>
                </div>
            </div>
        )
    }
}

export default Login