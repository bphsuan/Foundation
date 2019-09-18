import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      account: "",
      password: "",
      name: "",
      gender: "",
      birthday: "",
      email: "",
      phone: "",
      address: ""
    }
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
  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }
  updateGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  updateBirthday(e) {
    this.setState({
      birthday: e.target.value
    })
  }
  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  updatePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  updateAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  pwdShow() {
    this.setState({ show: true });
  }
  pwdHide() {
    this.setState({ show: false });
  }
  register = () => {

    const memberObj = {
      Account: this.state.account,
      Password: this.state.password,
      Name: this.state.name,
      Gender: this.state.gender,
      Birthday: this.state.birthday,
      Email: this.state.email,
      Phone: this.state.phone,
      Address: this.state.address
    }
    this.props.dispatch({
      type: 'member/register',
      payload: memberObj,
      callback: () => {
        console.log("註冊成功!")
        window.location = "/Login";
      }
    })
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
            <input type="text" className="input" onChange={this.updateAccount.bind(this)} />
          </div>
          <div className="input-style password" >
            <p className="letter">密碼</p>
            <input type={this.state.show ? "text" : "password"} className="input" onChange={this.updatePassword.bind(this)} />
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeDispear : eyeApear} icon={faEye} onClick={this.pwdShow.bind(this)} />
            <FontAwesomeIcon className="eye" style={this.state.show ? eyeApear : eyeDispear} icon={faEyeSlash} onClick={this.pwdHide.bind(this)} />
          </div>
          <div className="input-style">
            <p className="letter">姓名</p>
            <input type="text" className="input" onChange={this.updateName.bind(this)} />
          </div>
          <div className="input-style">
            <p className="letter">性別</p>
            <select className="input" onChange={this.updateGender.bind(this)}>
              <option>女</option>
              <option>男</option>
              <option>其他</option>
            </select>
          </div>
          <div className="input-style">
            <p className="letter">生日</p>
            <input type="date" className="input" onChange={this.updateBirthday.bind(this)} />
          </div>
          <div className="input-style">
            <p className="letter">Email</p>
            <input type="email" className="input" onChange={this.updateEmail.bind(this)} placeholder="例如:abc@gmail.com" />
          </div>
          <div className="input-style">
            <p className="letter">電話</p>
            <input type="tel" className="input" onChange={this.updatePhone.bind(this)} />
          </div>
          <div className="input-style">
            <p className="letter">地址</p>
            <input type="text" className="input" onChange={this.updateAddress.bind(this)} />
          </div>
          <div className="login-btn">
            <a onClick={this.register}>註冊</a>
          </div>
          <Link className="login-link" to="/Login">已經有會員? </Link>
        </div>
      </div>
    )
  }
}

// export default Register
export default connect()(Register)