import React from "react"
import { Link } from "gatsby";
import "./Header.scss"
import Logo from "../../images/background/foundationLogo.png"
class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // } 
    render() {
        return (
            <div className="Header">
            <Link to="/"><img className="logo" src={Logo} /></Link>
                <ul>                    
                    <li><Link to="/">首頁 ｜ Homepage</Link></li>
                    <li><Link to="/Detection/">色號檢測 ｜ Detection</Link></li>
                    <li><Link to="/Products/">產品介紹 ｜ Products</Link></li>
                    <li><Link to="/Contact/">聯絡我們 ｜ Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;