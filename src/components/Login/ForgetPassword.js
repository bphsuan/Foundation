import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="login_bg">
        <div className="login">
          <div className="login-form">
            <p>忘記密碼｜Password</p>
            <div className="input-style">
              <p className="letter">帳號</p>
              <input type="text" className="input" />
            </div>
            <div className="input-style">
              <p className="letter">Email</p>
              <input type="email" className="input" />
            </div>
            <div className="login-btn">
              <a href="">送出</a>
            </div>
            <Link
              className="login-link"
              to="/Login">
              回登入?
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgetPassword