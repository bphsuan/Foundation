import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { navigateTo } from 'gatsby';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      show: false
    }
  }
  componentDidMount() {
    this.accountInput.focus(); //載入時focus
  }
  pwdShow() {
    this.setState({ show: true });
  }
  pwdHide() {
    this.setState({ show: false });
  }
  updateAccount(e) {
    this.setState({
      account: e.target.value
    })
  }
  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.login();
    }
  }
  login = () => {
    const memberObj = {
      Account: this.state.account,
      Password: this.state.password,
    }
    if (this.state.account.length === 0) {
      alert("帳號尚未輸入");
    } else if (this.state.password.length === 0) {
      alert("密碼尚未輸入");
    } else {
      this.props.dispatch({
        type: "member/login",
        payload: memberObj,
        callback: () => { },
        callback: resMsg => {
          console.log(resMsg);
          if (resMsg === "登入成功") {
            return navigateTo('/')
          } else {
            alert(resMsg);
          }
        }
      })
    }
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
              <input
                type="text"
                className="input"
                value={this.state.account}
                onChange={this.updateAccount.bind(this)}
                onKeyDown={this.handleKeyDown}
                ref={(input) => { this.accountInput = input; }} //載入時focus
              />
            </div>
            <div className="input-style password">
              <p className="letter">密碼</p>
              <input
                type={this.state.show ? "text" : "password"}
                className="input"
                value={this.state.password}
                onChange={this.updatePassword.bind(this)}
                onKeyDown={this.handleKeyDown}
              />
              <FontAwesomeIcon
                className="eye"
                style={this.state.show ? eyeDispear : eyeApear}
                icon={faEye}
                onClick={this.pwdShow.bind(this)}
              />
              <FontAwesomeIcon
                className="eye"
                style={this.state.show ? eyeApear : eyeDispear}
                icon={faEyeSlash}
                onClick={this.pwdHide.bind(this)}
              />
            </div>
            <div className="login-btn">
              <a
                onClick={this.login.bind(this)}>
                登入
              </a>
            </div>
            <Link
              className="login-link"
              to="/ForgetPassword">
              忘記密碼?
            </Link>
            <span>｜</span>
            <Link
              className="login-link"
              to="/Register">
              還不是會員?
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)