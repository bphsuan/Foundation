import React from 'react'
import { Link } from 'gatsby'
import './ModifyPassword.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class ModifyPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originPwd: false,
      newPwd: false
    }
  }
  originPwdShow() {
    this.setState({ originPwd: true });
  }
  originPwdHide() {
    this.setState({ originPwd: false });
  }
  newPwdShow() {
    this.setState({ newPwd: true });
  }
  newPwdHide() {
    this.setState({ newPwd: false });
  }
  render() {
    const eyeDispear = {
      display: "none"
    }
    const eyeApear = {
      display: "inline-flex"
    }
    return (
      <div className="modify-form">
        <div className="input-style password">
          <p className="letter">舊密碼</p>
          <input type={this.state.originPwd ? "text" : "password"} className="input" />
          <FontAwesomeIcon className="eye" style={this.state.originPwd ? eyeDispear : eyeApear} icon={faEye} onClick={this.originPwdShow.bind(this)} />
          <FontAwesomeIcon className="eye" style={this.state.originPwd ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.originPwdHide.bind(this)} />
        </div>
        <div className="input-style password">
          <p className="letter">新密碼</p>
          <input type={this.state.newPwd ? "text" : "password"} className="input" />
          <FontAwesomeIcon className="eye" style={this.state.newPwd ? eyeDispear : eyeApear} icon={faEye} onClick={this.newPwdShow.bind(this)} />
          <FontAwesomeIcon className="eye" style={this.state.newPwd ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.newPwdHide.bind(this)} />
        </div>
        <div className="modify-btn">
          <a href="">儲存</a>
        </div>
      </div>
    )
  }
}

export default ModifyPassword