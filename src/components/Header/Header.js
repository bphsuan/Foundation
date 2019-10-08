import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import { connect } from 'react-redux';
import Logo from '../../images/background/foundationLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { navigateTo } from 'gatsby';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      bar: false,
      width: 0,
      location: "",
    }
  }
  componentDidMount() {
    this.setState({ location: window.location.pathname }) //抓路由
  }
  menuShow() {
    this.setState({ menu: true })
  }
  menuHide() {
    this.setState({ menu: false })
  }
  logout = () => {
    this.props.dispatch({
      type: "member/logout",
      callback: () => {
        return navigateTo('/') //redirect to homepage
      }
    })
  }
  render() {
    const dispear = {
      display: "none",
    }
    const apear = {
      display: "block",
    }
    const iconDispear = {
      display: "none",
    }
    const iconApear = {
      display: "inline-block",
    }
    const menuShow = {
      left: "0",
    }
    const menuHide = {
      left: "-305px",
    }
    const isLogin = this.props.isLogin;
    return (
      <div className="Header">
        <div className="bar">
          <FontAwesomeIcon
            className="barIcon"
            icon={faBars}
            style={this.state.menu ? dispear : apear}
            onClick={this.menuShow.bind(this)}
          />
          <FontAwesomeIcon
            className="barIcon"
            icon={faTimes}
            style={this.state.menu ? apear : dispear}
            onClick={this.menuHide.bind(this)}
          />
        </div>
        <Link to="/" className="logo">
          <img src={Logo} />
        </Link>
        <div className="nav" style={this.state.menu ? menuShow : menuHide}>
          <Link
            to="/"
            id="home"
            className={this.state.location === "/" ? "active" : ""}
          >
            網站首頁｜Home
          </Link>
          <Link
            to="/Detection"
            id="detection"
            className={this.state.location === "/Detection" ? "active" : ""}
          >
            色號檢測｜Detection
          </Link>
          <Link
            to="/Products"
            id="products"
            className={this.state.location === "/Products" ? "active" : ""}
          >
            產品介紹｜Products
          </Link>
          <Link
            to="/Contact"
            id="contact"
            className={this.state.location === "/Contact" ? "active" : ""}
          >
            聯絡我們｜Contact
          </Link>
          <div className="headerIcons">
            <Link
              to="/"
              className="headerIcon">
              <FontAwesomeIcon
                icon={faShoppingCart}
              />
            </Link>
            <Link
              to="/PersonalInfo"
              className="headerIcon"
              style={isLogin === "user" ? iconApear : iconDispear}
            >
              <FontAwesomeIcon
                icon={faUserCircle}
              />
            </Link>
            <Link
              to="/Login"
              className="headerIcon"
              style={isLogin === "user" ? iconDispear : iconApear}
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
              />
            </Link>
            <Link
              className="headerIcon"
              style={isLogin === "user" ? iconApear : iconDispear}
              onClick={this.logout.bind(this)}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
              />
            </Link>
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

export default connect(mapStateToProps)(Header)
