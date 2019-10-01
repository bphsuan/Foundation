import React from 'react';
import { Link } from 'gatsby';
import './PersonalHeader.scss';
import { connect } from "react-redux";
import ModifyHead from '../ModifyHead/ModifyHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
    return (
      <div className="personal-header">
        <ModifyHead />
        <div className="personal-menu">
          <p className="name">Hello! {this.props.memberAccount}</p>
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
            <span>查看我的最愛 </span>
            <FontAwesomeIcon
              className="icon"
              icon={faHeart}
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
    memberAccount: state.member.memberAccount
  };
}

export default connect(mapStateToProps)(PersonalHeader)