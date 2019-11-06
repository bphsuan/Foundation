import React from 'react';
import { Link } from 'gatsby';
import './PersonalHeader.scss';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
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
    this.setState({ location: window.location.pathname }) //抓路由

  }
  render() {
    if (this.props.isLogin === "admin") {
      navigateTo("/");
    } else if (this.props.isLogin === "guest") {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
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