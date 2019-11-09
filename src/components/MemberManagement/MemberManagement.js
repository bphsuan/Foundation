import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../MemberManagement/MemberManagement.scss';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

class MemberManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterAsc: true,
      filterDesc: false
    }
  }
  filterAsc() {
    this.setState({
      filterAsc: true,
      filterDesc: false
    }, () => { this.onChangeFilter(); }
    )

  }
  filterDesc() {
    this.setState({
      filterAsc: false,
      filterDesc: true
    }, () => { this.onChangeFilter(); }
    )

  }
  onChangeFilter() {
    if (this.state.filterAsc === true) {
      window.location.hash = "#Asc";
    } else if (this.state.filterDesc === true) {
      window.location.hash = "#Desc";
    }
    console.log(window.location.hash);
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "user") {
      navigateTo("/");
    } else if (localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="Member-header">
        <div className="Member-search">
          <input type="text" placeholder="請輸入關鍵字" />
          <span>
            <FontAwesomeIcon
              icon={faSearch}
            />
          </span>
        </div>
        <div className="Member-timeList">
          <a
            onClick={this.filterAsc.bind(this)}
            className={this.state.filterAsc ? "active" : ""}
          >
            加入時間早至晚
          </a>
          <a
            onClick={this.filterDesc.bind(this)}
            className={this.state.filterDesc ? "active" : ""}
          >
            加入時間晚至早
          </a>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(MemberManagement)