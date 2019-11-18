import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../MemberManagement/MemberManagement.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

class MemberManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOpen: false,
      open: false,
      filterAsc: true,
      filterDesc: false,
      keyword: "",
      members: [],
      history: [],
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
  handleClickOpen = (e) => {
    this.setState({
      setOpen: true,
      open: true,
    })
    // this.props.dispatch({
    //   type: "memberAdmin/Get_ProductsHotForAdmin",
    //   payload: e.target.id,
    //   callback: response => {
    //     if (response.Message === "發生錯誤。") {
    //       alert("連線逾時，請重新登入");
    //       this.props.dispatch({
    //         type: "member/logout",
    //       })
    //       navigate("/Login");
    //     } else {
    //       console.log(response);
    
    //     }
    //   }
    // })
  }
  handleClose() {
    this.setState({
      setOpen: false,
      open: false,
    })
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
          navigate("/Login");
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
          navigate("/Login");
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
          navigate("/Login");
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
          navigate("/Login");
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
          navigate("/Login");
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
    const button = {
      margin: "0",
      padding: "0",
      fontFamily: "sans-serif, 'Microsoft JhengHei', '微軟正黑體'",
      width: "100px",
      height: "40px",
      margin: "20px auto",
      backgroundColor: "#343434",
      color: "#fff",
      fontSize: "18px",
      display: "block",
      textAlign: "center",
      lineHeight: "40px",
      transition: "all 0.5s",
      letterSpacing: "3px",
      borderRadius: "0"
    }
    const table = {
      "border": "2px solid #222222",
      "borderCollapse": "collapse",
    }
    const td = {
      "border": "2px solid #222222",
      "color": "#222222",
    }
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    console.log(token.token[1]);
    if (token.token[1] === "user") {
      navigate("/");
    } else if (localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login");
        }
      })
      navigate("/Login");
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
                  <tr
                    key={i}
                    id={member.Account}
                    onClick={this.handleClickOpen.bind(this)}
                    title="點選以查看購買紀錄"
                  >
                    <td>{member.Account}</td>
                    <td>{member.Name}</td>
                    <td>{member.Gender}</td>
                    <td>{member.Birthday.split("T", 1)}</td>
                    <td>{member.Email}</td>
                    <td>{member.Phone}</td>
                    <td>{member.Address}</td>
                    <td>
                      <button
                        className="block"
                        id={member.Account}
                        onClick={member.Permission === 0 ? this.bindPermission.bind(this) : this.unbindPermission.bind(this)}
                      >{member.Permission === 0 ? "停權" : "啟用"}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title" >
          <DialogTitle
            id="form-dialog-title">
            購買紀錄
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="DialogContent">
                <table style={table}>
                  <tbody>
                    <tr>
                      <th style={td}>序號</th>
                      <th style={td}>品牌</th>
                      <th style={td}>名稱</th>
                      <th style={td}>價格</th>
                      <th style={td}>數量</th>
                      <th style={td}>購買時間</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose.bind(this)}
              style={button}>
              確定
            </Button>
          </DialogActions>
        </Dialog>
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