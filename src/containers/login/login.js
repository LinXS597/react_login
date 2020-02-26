import React, {Component} from 'react'
import {List,InputItem,WingBlank,WhiteSpace, Button} from 'antd-mobile'

class Login extends Component {
    render() {
        return (
            <div className="page-login">
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem>lbj-账号</InputItem>
                    <InputItem>lbj-密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                </WingBlank>
            </div>
        )
    }
    /*
    *     去注册
    * */
    // handleGoRegister() {
    //     this.props.history.push('/register');
    // }
}

export default Login