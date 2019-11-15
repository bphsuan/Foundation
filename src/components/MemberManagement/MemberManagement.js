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
      filterDesc: false,
      keyword: "",
      members: []
    }
  }
  componentDidMount = () => {
    window.location.hash = "#Asc";
    const hash = window.location.hash;
    if (hash === "#Asc") {
      this.getMemberAsc();
    } else if (hash === "#Desc") {
      this.getMemberDesc();
    }
  }
  filterAsc = () => {
    this.setState({
      filterAsc: true,
      filterDesc: false
    }, () => { this.onChangeFilter(); })
    this.getMemberAsc();
  }
  filterDesc = () => {
    this.setState({
      filterAsc: false,
      filterDesc: true
    }, () => { this.onChangeFilter(); })
    this.getMemberDesc();
  }
  onChangeFilter = () => {
    if (this.state.filterAsc === true) {
      window.location.hash = "#Asc";
    } else if (this.state.filterDesc === true) {
      window.location.hash = "#Desc";
    }
  }
  handleOnChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.searchMember();
    }
  }
  searchMember = () => {
    window.location.hash = "#Search"
    this.setState({
      filterAsc: false,
      filterDesc: false
    })
    const search = this.state.keyword;
    this.props.dispatch({
      type: "memberAdmin/searchMember",
      payload: search,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          this.setState({
            members: response
          })
        }
      }
    })
  }
  getMemberAsc = () => {
    this.props.dispatch({
      type: "memberAdmin/Get_memberAsc",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          this.setState({
            members: response,
          })
        }
      }
    })
  }
  getMemberDesc = () => {
    this.props.dispatch({
      type: "memberAdmin/Get_memberDesc",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          this.setState({
            members: response,
          })
        }
      }
    })
  }
  bindPermission = (e) => {
    this.props.dispatch({
      type: "memberAdmin/bindPermission",
      payload: e.target.id,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          const hash = window.location.hash;
          if (hash === "#Asc") {
            this.getMemberAsc();
          } else if (hash === "#Desc") {
            this.getMemberDesc();
          } else if (hash === "#Search") {
            this.searchMember();
          }
          alert("已停用此帳號");
        }
      }
    })
  }
  unbindPermission = (e) => {
    this.props.dispatch({
      type: "memberAdmin/unbindPermission",
      payload: e.target.id,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          const hash = window.location.hash;
          if (hash === "#Asc") {
            this.getMemberAsc();
          } else if (hash === "#Desc") {
            this.getMemberDesc();
          }
          alert("已啟用此帳號");
        }
      }
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    console.log(token.token[1]);
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
      <div>
        <div className="Member-header">
          <div className="Member-search">
            <input
              type="text"
              placeholder="請輸入帳號或信箱關鍵字"
              onChange={this.handleOnChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
            />
            <span>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={this.searchMember.bind(this)}
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
        </div>
        <div className="Member">
          <table className="MemberData">
            <tbody>
              <tr>
                <th>帳號</th>
                <th>姓名</th>
                <th>性別</th>
                <th>生日</th>
                <th>email</th>
                <th>電話</th>
                <th>地址</th>
                <th>停權</th>
              </tr>
              {this.state.members.map((member, i) => {
                return (
                  <tr key={i}>
                    <th>{member.Account}</th>
                    <th>{member.Name}</th>
                    <th>{member.Gender}</th>
                    <th>{member.Birthday.split("T", 1)}</th>
                    <th>{member.Email}</th>
                    <th>{member.Phone}</th>
                    <th>{member.Address}</th>
                    <th>
                      <button
                        className="block"
                        id={member.Account}
                        onClick={member.Permission === 0 ? this.bindPermission.bind(this) : this.unbindPermission.bind(this)}>
                        {member.Permission === 0 ? "停權" : "啟用"}
                      </button>
                    </th>
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

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(MemberManagement)