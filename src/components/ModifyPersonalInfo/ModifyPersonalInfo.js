import React from 'react';
import './ModifyPersonalInfo.scss';
import { connect } from "react-redux";
import { navigateTo } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModifyPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Gender: "",
      Birthday: "",
      Email: "",
      Phone: "",
      Address: ""
    }
  }
  componentDidMount() {
    this.GET_userInfo();
  }

  GET_userInfo = () => {
    this.props.dispatch({
      type: "member/GET_userInfo",
      callback: response => {
        // console.log(response);
        this.setState({
          Name: response.Name,
          Gender: response.Gender,
          Birthday: response.Birthday,
          Email: response.Email,
          Phone: response.Phone,
          Address: response.Address
        })
        //取年月日
        let dateTemp = this.state.Birthday.split("T", 1)[0]
        this.setState({
          Birthday: dateTemp
        })
        // console.log(this.state);
      }
    })
  }
  Send_userInfo = () => {
    const userInfo = {
      Name: this.state.Name,
      Gender: this.state.Gender,
      Birthday: this.state.Birthday,
      Email: this.state.Email,
      Phone: this.state.Phone,
      Address: this.state.Address
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
  changeItem = (e) => {
    switch (e.target.id) {
      case "Name":
        this.setState({
          Name: e.target.value
        })
        console.log("改名字!" + e.target.value);
        break;
      case "Gender":
        this.setState({
          Gender: e.target.value
        })
        console.log("改性別!" + e.target.value);
        break;
      case "Birthday":
        this.setState({
          Birthday: e.target.value
        })
        console.log("改生日!" + e.target.value);
        break;
      case "Email":
        this.setState({
          Email: e.target.value
        })
        console.log("改信箱!" + e.target.value);
        break;
      case "Phone":
        this.setState({
          Phone: e.target.value
        })
        console.log("改電話!" + e.target.value);
        break;
      case "Address":
        this.setState({
          Address: e.target.value
        })
        console.log("改地址!" + e.target.value);
        break;
    }
  }
  render() {
    return (
      <div className="modify-form" >
        <div className="input-style">
          <p className="letter">姓名</p>
          <input type="text" id="Name" className="input" defaultValue={this.state.Name} onChange={this.changeItem.bind(this)} />
        </div>
        <div className="input-style">
          <p className="letter">性別</p>
          <select id="Gender" className="input" defaultValue={this.state.Gender} onChange={this.changeItem.bind(this)} >
            <option>女</option>
            <option>男</option>
          </select>
        </div>
        <div className="input-style">
          <p className="letter">生日</p>
          <input type="date" id="Birthday" className="input" defaultValue={this.state.Birthday} onChange={this.changeItem.bind(this)} />
        </div>
        <div className="input-style">
          <p className="letter">email</p>
          <input type="email" id="Email" className="input" defaultValue={this.state.Email} onChange={this.changeItem.bind(this)} />
        </div>
        <div className="input-style">
          <p className="letter">電話</p>
          <input type="tel" id="Phone" className="input" defaultValue={this.state.Phone} onChange={this.changeItem.bind(this)} />
        </div>
        <div className="input-style">
          <p className="letter">地址</p>
          <input type="text" id="Address" className="input" defaultValue={this.state.Address} onChange={this.changeItem.bind(this)} />
        </div>
        <div className="modify-btn">
          <a onClick={this.Send_userInfo.bind(this)}>儲存</a>
        </div>
      </div>
    )
  }
}

export default connect()(ModifyPersonalInfo)