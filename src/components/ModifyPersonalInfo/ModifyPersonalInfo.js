import React from 'react';
import './ModifyPersonalInfo.scss';
import { connect } from "react-redux";
import { navigateTo } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModifyPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    }
  }
  componentDidMount() {
    this.GET_userInfo();
  }

  GET_userInfo = () => {
    this.props.dispatch({
      type: "member/GET_userInfo",
      callback: response => {
        console.log(response);
        this.setState({
          user: response,
        })
        console.log(this.state.user);
      }
    })
  }
  Send_userInfo = () => {
    const userInfo = {
      Name: this.state.user.name,
      Gender: this.state.user.gender,
      Birthday: this.state.user.birthday,
      Email: this.state.user.email,
      Phone: this.state.user.phone,
      Address: this.state.user.address

    }
    console.log(userInfo)
    this.props.dispatch({
      type: "member/Send_userInfo",
      payload: userInfo,
      callback: response => {
        console.log(response);
        if (response === "修改成功") {
          return navigateTo('/PersonalInfo')
        } else {
          alert(response);
        }
      }
    })
  }
  changeName = (e) => {
    console.log(e.target)
    this.setState({
      // user: [, , e.target.value,],
    })

  }
  render() {
    return (
      <div className="modify-form" >
        <div className="input-style">
          <p className="letter">姓名</p>
          <input type="text" className="input" defaultValue={this.state.user.Name} onChange={this.changeName} />
        </div>
        <div className="input-style">
          <p className="letter">性別</p>
          <select className="input" defaultValue={this.state.user.Gender}>
            <option>女</option>
            <option>男</option>
          </select>
        </div>
        <div className="input-style">
          <p className="letter">生日</p>
          <input type="date" className="input" defaultValue={this.state.user.Birthday} />
        </div>
        <div className="input-style">
          <p className="letter">email</p>
          <input type="email" className="input" defaultValue={this.state.user.Email} />
        </div>
        <div className="input-style">
          <p className="letter">電話</p>
          <input type="tel" className="input" defaultValue={this.state.user.Phone} />
        </div>
        <div className="input-style">
          <p className="letter">地址</p>
          <input type="text" className="input" defaultValue={this.state.user.Address} />
        </div>
        <div className="modify-btn">
          <a onClick={this.Send_userInfo.bind(this)}>儲存</a>
        </div>
      </div>
    )
  }
}

export default connect()(ModifyPersonalInfo)