import React from "react"
import { Link } from "gatsby";
import "./Header.scss"
import Logo from "../../images/background/foundationLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            bar: false,
            width: 0
        }
    }
    menuShow() {
        this.setState({ menu: true })
    }
    menuHide() {
        this.setState({ menu: false })
    }
    render() {
        const barDispear = {
            display: "none"
        }
        const barApear = {
            display: "block"
        }
        const menuShow = {
            left: "0"
        }
        const menuHide = {
            left: "-305px"
        }
        return (
            <div className="Header">
                <div className="bar">
                    <FontAwesomeIcon className="barIcon" icon={faBars} style={this.state.menu ? barDispear : barApear} onClick={this.menuShow.bind(this)}></FontAwesomeIcon>
                    <FontAwesomeIcon className="barIcon" icon={faTimes} style={this.state.menu ? barApear : barDispear} onClick={this.menuHide.bind(this)}></FontAwesomeIcon>
                </div>
                <Link to="/" className="logo"><img src={Logo} /></Link>
                <div className="nav" style={this.state.menu ? menuShow : menuHide}>
                    <Link to="/">網站首頁｜Homepage</Link>
                    <Link to="/Detection/">色號檢測｜Detection</Link>
                    <Link to="/Products/">產品介紹｜Products</Link>
                    <Link to="/Contact/">聯絡我們｜Contact</Link>
                    <div className="headerIcons">
                        <Link to="/" className="headerIcon"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        <Link to="/Login/" className="headerIcon"><FontAwesomeIcon icon={faSignInAlt} /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;