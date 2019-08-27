import React from 'react'
import { Link } from 'gatsby'
import Logo from "../../images/background/foundationLogo.png"
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
              <span className="letter">帳號</span>
              <input type="text" className="input" />
            </div>
            <div className="input-style password">
              <span className="letter">密碼</span>
              <input type={this.state.show ? "text" : "password"} className="input" />
              <FontAwesomeIcon className="eye" style={this.state.show ? eyeDispear : eyeApear} icon={faEye} onClick={this.pwdShow.bind(this)}></FontAwesomeIcon>
              <FontAwesomeIcon className="eye" style={this.state.show ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.pwdHide.bind(this)}></FontAwesomeIcon>
            </div>
            <div className="login-btn">
              <a href="">登入</a>
            </div>
            <Link className="login-link" to="/">忘記密碼? </Link>
            <span>｜</span>
            <Link className="login-link" to="/Register/"> 還不是會員?</Link>
          </div>
        </div>
      </div >
    )
  }
}

export default Login