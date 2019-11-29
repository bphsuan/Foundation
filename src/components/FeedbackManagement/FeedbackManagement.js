import React from 'react'
import './FeedbackManagement.scss';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

class FeedbackManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    this.getFeedback();
    const token = (window.localStorage.getItem("token")) ? JSON.parse(window.localStorage.getItem("token")) : {
      token: []
    };
    window.localStorage.getItem(token);
    console.log(token.token[1]);
    if (token.token[1] === "user") {
      navigate("/");
    } else if (window.localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login");
        }
      })
      navigate("/Login");
    }
  }
  getFeedback = () => {
    this.props.dispatch({
      type: "contact/getContact",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          console.log(response);
          this.setState({
            contacts: response
          })
        }
      }
    })
  }
  render() {

    return (
      <div>
        <div className="feedback">
          <table className="feedbackData">
            <tbody>
              <tr>
                <th>姓名</th>
                <th>email</th>
                <th>內容</th>
              </tr>
              {this.state.contacts.map((contact, i) => {
                return (
                  <tr
                    key={i}
                    id={contact.Contact_Id}
                  >
                    <td>{contact.Name}</td>
                    <td>{contact.Email}</td>
                    <td>{contact.Content}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default connect()(FeedbackManagement)