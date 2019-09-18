import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/background/foundationLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
  render() {
    const barDispear = {
      display: "none",
    }
    const barApear = {
      display: "block",
    }
    const menuShow = {
      left: "0",
    }
    const menuHide = {
      left: "-305px",
    }
    return (
      <div className="Header">
        <div className="bar">
          <FontAwesomeIcon
            className="barIcon"
            icon={faBars}
            style={this.state.menu ? barDispear : barApear}
            onClick={this.menuShow.bind(this)}
          />
          <FontAwesomeIcon
            className="barIcon"
            icon={faTimes}
            style={this.state.menu ? barApear : barDispear}
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
              className="headerIcon">
              <FontAwesomeIcon
                icon={faUserCircle}
              />
            </Link>
            <Link
              to="/Login"
              className="headerIcon">
              <FontAwesomeIcon
                icon={faSignInAlt}
              />
            </Link>
            {/* <Link
              to="/Login"
              className="headerIcon">
              <FontAwesomeIcon
                icon={faSignOutAlt}
              />
            </Link> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
