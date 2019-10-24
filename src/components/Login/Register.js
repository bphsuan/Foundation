import React from 'react';
import { Link } from 'gatsby';
import './style.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { navigateTo } from 'gatsby';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      account: "",
      password: "",
      name: "",
      gender: "女",
      birthday: "",
      email: "",
      phone: "",
      address: "",
      location: ""
    }
  }
  componentDidMount() {
    this.setState({
      location: window.location.pathname
    }, () => {
      console.log(this.state.location);
    })
    // 登入後阻擋此頁顯示
    if (this.props.isLogin === "user") {
      navigateTo("/");
    }
    this.accountInput.focus(); //載入時focus
  }
  updateItem(e) {
    switch (e.target.id) {
      case "Account":
        this.setState({
          account: e.target.value
        })
        break;
      case "Password":
        this.setState({
          password: e.target.value
        })
        break;
      case "Name":
        this.setState({
          name: e.target.value
        })
        break;
      case "Gender":
        this.setState({
          gender: e.target.value
        })
        break;
      case "Birthday":
        this.setState({
          birthday: e.target.value
        })
        break;
      case "Email":
        this.setState({
          email: e.target.value
        })
        break;
      case "Phone":
        this.setState({
          phone: e.target.value
        })
        break;
      case "Address":
        this.setState({
          address: e.target.value
        })
        break;
    }

  }
  pwdShow() {
    this.setState({ show: true });
  }
  pwdHide() {
    this.setState({ show: false });
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.register();
    }
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
    if (
      this.state.account.length === 0 ||
      this.state.password.length === 0 ||
      this.state.name.length === 0 ||
      this.state.gender.length === 0 ||
      this.state.birthday.length === 0 ||
      this.state.email.length === 0 ||
      this.state.phone.length === 0 ||
      this.state.address.length === 0) {
      alert("所有欄位皆為必填");
    } else if (this.state.account.length < 6 || this.state.account.length > 20) {
      alert("帳號長度請介於6~20字元");
    } else if (this.state.password.length < 6 || this.state.password.length > 20) {
      alert("密碼長度請介於6~20字元");
    } else if (
      this.state.phone.length !== 10 ||
      isNaN(this.state.phone)
    ) {
      alert("電話格式錯誤");
    } else if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.email))) {
      alert("email格式錯誤");
    } else {
      this.props.dispatch({
        type: "member/register",
        payload: memberObj,
        callback: resMsg => {
          console.log(resMsg);
          if (resMsg === "註冊成功") {
            alert(resMsg);
            return navigateTo('/Login') //redirect to Login

          } else {
            alert(resMsg);
          }
        }
      })
    }
  }
  render() {
    if (this.props.isLogin === "user" && this.state.location === "/Register") {
      navigateTo("/");
    }
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
            <p className="letter">帳號
            <span className="required">*</span>
            </p>
            <input
              id="Account"
              type="text"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
              placeholder="請輸入介於6~20字元"
              ref={(input) => { this.accountInput = input; }} //載入時focus
            />
          </div>
          <div className="input-style password" >
            <p className="letter">密碼
            <span className="required">*</span>
            </p>
            <input
              type={this.state.show ? "text" : "password"}
              id="Password"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
              placeholder="請輸入介於6~20字元"
            />
            <FontAwesomeIcon
              className="eye"
              style={this.state.show ? eyeDispear : eyeApear}
              icon={faEye} onClick={this.pwdShow.bind(this)}
            />
            <FontAwesomeIcon
              className="eye"
              style={this.state.show ? eyeApear : eyeDispear}
              icon={faEyeSlash} onClick={this.pwdHide.bind(this)}
            />
          </div>
          <div className="input-style">
            <p className="letter">姓名
            <span className="required">*</span>
            </p>
            <input
              id="Name"
              type="text"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
            />
          </div>
          <div className="input-style">
            <p className="letter">性別
            <span className="required">*</span>
            </p>
            <select
              id="Gender"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
              defaultValue="女"
            >
              <option value="女">女</option>
              <option value="男">男</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div className="input-style">
            <p className="letter">生日
            <span className="required">*</span>
            </p>
            <input type="date"
              id="Birthday"
              className="input"
              onKeyDown={this.handleKeyDown}
              onChange={this.updateItem.bind(this)}
            />
          </div>
          <div className="input-style">
            <p className="letter">email
            <span className="required">*</span>
            </p>
            <input type="email"
              id="Email"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
              placeholder="例如:abc@gmail.com"
            />
          </div>
          <div className="input-style">
            <p className="letter">電話
            <span className="required">*</span>
            </p>
            <input type="tel"
              id="Phone"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
              placeholder="例如:0912345678、0422334455"
            />
          </div>
          <div className="input-style">
            <p className="letter">地址
            <span className="required">*</span>
            </p>
            <input
              id="Address"
              type="text"
              className="input"
              onChange={this.updateItem.bind(this)}
              onKeyDown={this.handleKeyDown}
            />
          </div>
          <div className="login-btn">
            <a
              onClick={this.register.bind(this)}
            >
              註冊
            </a>
          </div>
          <Link
            className="login-link"
            to="/Login">
            已經有會員?
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
    token: state.member.token
  };
}

export default connect(mapStateToProps)(Register)