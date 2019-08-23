import React from 'react'
import { Link } from 'gatsby'
import Logo from "../../images/background/foundationLogo.png"
import './style.scss'
class Login extends React.Component {
  render() {

    return (
      <div className="login_bg">
        <div className="big-logo">
          <img className="logo" src={Logo} />
        </div>
        <div className="login">
          <div className="login-form">
            <p>登 入｜Login</p>
            <div className="input-style">
              <span className="letter">帳號</span> <input type="text" className="input" />
            </div>
            <div className="input-style">
              <span className="letter">密碼</span>  <input type="text" className="input" />
            </div>
            <div className="login-btn">
              <a href="">登入</a>
            </div>
            <Link className="login-link" to="/">忘記密碼? </Link>｜
          <Link className="login-link" to="/Register/">還不是會員?</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login