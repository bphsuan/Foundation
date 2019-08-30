import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  pwdShow() {
    this.setState({ show: true });
  }
  pwdHide() {
    this.setState({ show: false });
  }
  render() {
    const eyeDispear = {
      display: "none"
    }
    const eyeApear = {
      display: "inline-flex"
    }
    return (
      <div className="login_bg">
        <div className="login">
          <div className="login-form">
            <p>登 入｜Log in</p>
            <div className="input-style">
              <p className="letter">帳號</p>
              <input type="text" className="input" />
            </div>
            <div className="input-style password">
              <p className="letter">密碼</p>
              <input type={this.state.show ? "text" : "password"} className="input" />
              <FontAwesomeIcon className="eye" style={this.state.show ? eyeDispear : eyeApear} icon={faEye} onClick={this.pwdShow.bind(this)} />
              <FontAwesomeIcon className="eye" style={this.state.show ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.pwdHide.bind(this)} />
            </div>
            <div className="login-btn">
              <a href="">登入</a>
            </div>
            <Link className="login-link" to="/ForgetPassword">忘記密碼? </Link>
            <span>｜</span>
            <Link className="login-link" to="/Register"> 還不是會員?</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login