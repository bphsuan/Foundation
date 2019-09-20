import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      account: "",
      password: "",
      show: false
    }
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
  async login() {
    const { account, password } = this.state;
    fetch("http://foundation.hsc.nutc.edu.tw/api/Customer/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        Account: account,
        Password: password
      })
    }).then(r => r.json())
      .then(response => {
        window.location = '/';
        console.log('Success:', JSON.stringify(response));
        this.setState({ isLogin: true })
      })
      .catch(error => console.error('Error:', error));
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
              />
            </div>
            <div className="input-style password">
              <p className="letter">密碼</p>
              <input
                type={this.state.show ? "text" : "password"}
                className="input"
                value={this.state.password}
                onChange={this.updatePassword.bind(this)}
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

export default Login