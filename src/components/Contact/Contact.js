import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import contactPic from '../../images/contactus.png';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Content: ""
    }
  }
  changeItem = (e) => {
    switch (e.target.id) {
      case "Name":
        this.setState({
          Name: e.target.value
        }, () => { })
        break;
      case "Email":
        this.setState({
          Email: e.target.value
        }, () => { })
        break;
      case "Content":
        this.setState({
          Content: e.target.value
        }, () => { })
        break;
    }
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.submitFeedback();
    }
  }
  submitFeedback = () => {
    const feedbackObj = {
      Name: this.state.Name,
      Email: this.state.Email,
      Content: this.state.Content
    }
    if (
      this.state.Name.length === 0 ||
      this.state.Email.length === 0 ||
      this.state.Content.length === 0
    ) {
      alert("所有欄位皆為必填");
    } else if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.Email))) {
      alert("Email格式錯誤")
    } else {
      this.props.dispatch({
        type: "contact/sendContact",
        payload: feedbackObj,
        callback: response => {
          console.log(response);
        }
      })
    }
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
      navigateTo("/");
      // } else if (localStorage.length === 0) {
      //   console.log(this.props.isLogin);
      //   this.props.dispatch({
      //     type: "member/logout",
      //     callback: () => {
      //       navigateTo("/Login");
      //     }
      //   })
      //   navigateTo("/Login");
    }
    return (
      <div className="contact">
        <div className="contact-bar">
          <div className="contact-box ">
            <div className="contact-msg rightBar">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faPhone}
              />
              <p>0934032602</p>
            </div>
          </div>
          <div className="contact-box ">
            <div className="contact-msg rightBar">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faEnvelope}
              />
              <p>amychen861110@gmail.com</p>
            </div>
          </div>
          <div className="contact-box ">
            <div className="contact-msg">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faMapMarkedAlt}
              />
              <p>台中市北區三民路三段129號 </p>
            </div>
          </div>

        </div>
        <div className="contact-body">
          <div className="contact-bodyPic">
            <img src={contactPic} width="90%" />
          </div>
          <div className="contact-bodyBox">
            <div className="input-style">
              <p className="letter">姓名</p>
              <input
                type="text"
                id="Name"
                className="input"
                onChange={this.changeItem.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
              />
            </div>
            <div className="input-style">
              <p className="letter">email</p>
              <input
                type="text"
                id="Email"
                className="input"
                onChange={this.changeItem.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
              />
            </div>
            <div className="input-style">
              <p className="letter">描述</p>
              <textarea
                id="Content"
                className="input textarea"
                onChange={this.changeItem.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
              />
            </div>
            <div className="summit-btn">
              <button onClick={this.submitFeedback.bind(this)}>
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(Contact)