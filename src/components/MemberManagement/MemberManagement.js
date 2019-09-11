import React from "react"
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../MemberManagement/MemberManagement.scss"
class MemberManagement extends React.Component {
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
            <div className="Member-header">
                <div className="Member-search">
                    <input type="text" placeholder="請輸入關鍵字" />
                    <span>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
                </div>
                <div className="Member-timeList">
                    <Link to="/MemberJoinData"
                        className={this.state.location === "/MemberJoinData" ? "active" : ""}>
                        <span>加入時間早至晚 </span>
                    </Link>
                    <Link to="/MemberJoinData"
                        className={this.state.location === "/MemberJoinData" ? "active" : ""}>
                        <span>加入時間晚至早 </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MemberManagement;