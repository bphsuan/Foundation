import React from 'react';
import './MemberJoinData.scss';
import { connect } from "react-redux";

class MemberJoinData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }
  componentDidMount() {
    this.getMemberAsc();
  }
  getMemberAsc = () => {
    this.props.dispatch({
      type: "memberAdmin/Get_memberAsc",
      callback: response => {
        this.setState({
          members: response
        })
      }
    })
  }
  getMemberDesc = () => {
    this.props.dispatch({
      type: "memberAdmin/Get_memberDesc",
      callback: response => {
        this.setState({
          members: response
        })
      }
    })
  }
  render() {
    const hash = window.location.hash;
    if (hash === "#Asc") {
      this.getMemberAsc();
    } else if (hash === "#Desc") {
      this.getMemberDesc();
    }
    return (
      <div className="Member">
        <table className="MemberData">
          <tr>
            <th>帳號</th>
            <th>姓名</th>
            <th>性別</th>
            <th>生日</th>
            <th>email</th>
            <th>電話</th>
            <th>地址</th>
            <th>停權</th>
          </tr>
          {this.state.members.map((member) => {
            return (
              <tr>
                <th>{member.Account}</th>
                <th>{member.Name}</th>
                <th>{member.Gender}</th>
                <th>{member.Birthday.split("T", 1)}</th>
                <th>{member.Email}</th>
                <th>{member.Phone}</th>
                <th>{member.Address}</th>
                <th><button className="block">停權</button></th>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default connect()(MemberJoinData)