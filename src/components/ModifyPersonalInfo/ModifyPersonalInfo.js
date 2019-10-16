import React from 'react';
import './ModifyPersonalInfo.scss';
import { connect } from "react-redux";
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
  render() {
    return (
      <div className="modify-form" >
        <div className="input-style">
          <p className="letter">姓名</p>
          <input type="text" className="input" value={this.state.user.Name} />
        </div>
        <div className="input-style">
          <p className="letter">性別</p>
          <select className="input" value={this.state.user.Gender}>
            <option>女</option>
            <option>男</option>
          </select>
        </div>
        <div className="input-style">
          <p className="letter">生日</p>
          <input type="date" className="input" value={this.state.user.Birthday} />
        </div>
        <div className="input-style">
          <p className="letter">email</p>
          <input type="email" className="input" value={this.state.user.Email} />
        </div>
        <div className="input-style">
          <p className="letter">電話</p>
          <input type="tel" className="input" value={this.state.user.Phone} />
        </div>
        <div className="input-style">
          <p className="letter">地址</p>
          <input type="text" className="input" value={this.state.user.Address} />
        </div>
        <div className="modify-btn">
          <a href="">儲存</a>
        </div>
      </div>
    )
  }
}

export default connect()(ModifyPersonalInfo)