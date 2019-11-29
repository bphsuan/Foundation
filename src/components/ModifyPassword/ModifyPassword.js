import React from 'react';
import './ModifyPassword.scss';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby';

class ModifyPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originPwd: false,
      newPwd: false,
      oldPassword: "",
      newPassword: ""
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
  updateOldPsw(e) {
    this.setState({
      oldPassword: e.target.value
    })
  }
  updateNewPsw(e) {
    this.setState({
      newPassword: e.target.value
    })
  }
  modify = () => {
    const passwordObj = {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword
    }
    if (this.state.newPassword.length === 0 || this.state.oldPassword.length === 0) {
      alert("缺少新或舊密碼");
    } else if (this.state.newPassword.length < 6) {
      alert("請輸入6~20位元")
    } else {
      this.props.dispatch({
        type: "member/modifyPsw",
        payload: passwordObj,
        callback: resMsg => {
          console.log(resMsg);
          if (resMsg === "修改密碼成功") {
            alert(resMsg);
            return navigate('/PersonalInfo')
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
      <div className="modify-form" >
        <div className="input-style password">
          <p className="letter">舊密碼</p>
          <input type={this.state.originPwd ? "text" : "password"}
            className="input"
            onChange={this.updateOldPsw.bind(this)} />
          <FontAwesomeIcon
            className="eye"
            style={this.state.originPwd ? eyeDispear : eyeApear}
            icon={faEye}
            onClick={this.originPwdShow.bind(this)} />
          <FontAwesomeIcon
            className="eye"
            style={this.state.originPwd ? eyeApear : eyeDispear}
            icon={faEyeSlash}
            onClick={this.originPwdHide.bind(this)} />
        </div>
        <div className="input-style password">
          <p className="letter">新密碼</p>
          <input type={this.state.newPwd ? "text" : "password"}
            className="input"
            onChange={this.updateNewPsw.bind(this)} />
          <FontAwesomeIcon
            className="eye"
            style={this.state.newPwd ? eyeDispear : eyeApear}
            icon={faEye}
            onClick={this.newPwdShow.bind(this)} />
          <FontAwesomeIcon
            className="eye"
            style={this.state.newPwd ? eyeApear : eyeDispear}
            icon={faEyeSlash}
            onClick={this.newPwdHide.bind(this)} />
        </div>
        <div className="modify-btn">
          <a onClick={this.modify.bind(this)}>儲存</a>
        </div>
      </div>
    )
  }
}

export default connect()(ModifyPassword)