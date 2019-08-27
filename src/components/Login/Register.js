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
            <span className="letter">帳號</span>
            <input type="text" className="input" />
          </div>
          <div className="input-style password" >
            <span className="letter">密碼</span>
            <input type={this.state.show ? "text" : "password"} className="input" />
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeDispear : eyeApear} icon={faEye} onClick={this.pwdShow.bind(this)}></FontAwesomeIcon>
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.pwdHide.bind(this)}></FontAwesomeIcon>
          </div>
          <div className="input-style">
            <span className="letter">姓名</span>
            <input type="text" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">性別</span>
            <select className="input">
              <option>女</option>
              <option>男</option>
            </select>
          </div>
          <div className="input-style">
            <span className="letter">生日</span>
            <input type="date" className="input" />
          </div>
          <div className="input-style">
            <span>Email</span>
            <input type="email" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">電話</span>
            <input type="tel" className="input" />
          </div>
          <div className="input-style">
            <span className="letter">地址</span>
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