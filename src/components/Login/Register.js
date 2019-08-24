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
          <p>註 冊｜Register</p>
          <div className="input-style">
            <span className="letter">帳號</span> <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">密碼</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">姓名</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">性別</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">生日</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span>Email</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">電話</span>  <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">地址</span>  <input type="text" className="input" />
          </div>
          <div className="login-btn">
            <a href="">註冊</a>
          </div>
          <Link className="login-link" to="/Login">已經有會員? </Link>

        </div>
      </div>
    )
  }
}

export default Login