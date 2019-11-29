import React from 'react';
import { Link } from 'gatsby';
import './PersonalHeader.scss';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import ModifyHead from '../ModifyHead/ModifyHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

class PersonalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""

    }
  }
  componentDidMount() {
    const token = window.localStorage.getItem("token")
      ? JSON.parse(window.localStorage.getItem("token"))
      : {
        token: [],
      }
    window.localStorage.getItem(token)
    if (token.token[1] === "user") {
      navigate("/")
    } else if (window.localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login")
        },
      })
      navigate("/Login")
    }
    this.setState({ location: window.location.pathname }) //抓路由
  }
  render() {
    return (
      <div className="personal-header">
        <ModifyHead />
        <div className="personal-menu">
          <p className="name">Hello! {this.props.username}</p>
          <Link
            to="/PersonalInfo"
            className={this.state.location === "/PersonalInfo" ? "active" : ""}>
            <span>編輯個人資訊 </span>
            <FontAwesomeIcon
              className="icon"
              icon={faEdit}
            />
          </Link>
          <Link
            to="/DetectionHistory"
            className={this.state.location === "/DetectionHistory" ? "active" : ""}>
            <span>檢測歷史紀錄 </span>
            <FontAwesomeIcon
              className="icon"
              icon={faCamera}
            />
          </Link>
          <Link
            to="/DealHistory"
            className={this.state.location === "/DealHistory" ? "active" : ""}>
            <span>購買歷史紀錄 </span>
            <FontAwesomeIcon
              className="icon"
              icon={faShoppingBag}
            />
          </Link>
          <Link
            to="/MyFavorite"
            className={this.state.location === "/MyFavorite" ? "active" : ""}>
            <span>我的好物管理 </span>
            <FontAwesomeIcon
              className="icon"
              icon={faGift}
            />
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
    username: state.member.username
  };
}

export default connect(mapStateToProps)(PersonalHeader)