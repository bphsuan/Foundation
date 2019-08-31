import React from 'react'
import { Link } from 'gatsby'
import Logo from "../../images/background/foundationLogo.png"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class Register extends React.Component {
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
          <p>註 冊｜Register</p>
          <div className="input-style">
            <p className="letter">帳號</p>
            <input type="text" className="input" />
          </div>
          <div className="input-style password" >
            <p className="letter">密碼</p>
            <input type={this.state.show ? "text" : "password"} className="input" />
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeDispear : eyeApear} icon={faEye} onClick={this.pwdShow.bind(this)} />
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.pwdHide.bind(this)} />
          </div>
          <div className="input-style">
            <p className="letter">姓名</p>
            <input type="text" className="input" />
          </div>
          <div className="input-style">
            <p className="letter">性別</p>
            <select className="input">
              <option>女</option>
              <option>男</option>
            </select>
          </div>
          <div className="input-style">
            <p className="letter">生日</p>
            <input type="date" className="input" />
          </div>
          <div className="input-style">
            <p className="letter">Email</p>
            <input type="email" className="input" />
          </div>
          <div className="input-style">
            <p className="letter">電話</p>
            <input type="tel" className="input" />
          </div>
          <div className="input-style">
            <p className="letter">地址</p>
            <input type="text" className="input" />
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

export default Register