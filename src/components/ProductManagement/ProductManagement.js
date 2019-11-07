import React from "react"
import './ProductManagement.scss'
import { Link } from 'gatsby';
import DialogBox from './DialogBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: '',
      open: false
    }
  }
  setEdditButton = () => {
    this.setState({
      button: 'edit',
      open: true
    })
  }
  setDeleteButton = () => {
    this.setState({
      button: 'delete',
      open: true
    })
  }
  setAddButton = () => {
    this.setState({
      button: 'add',
      open: true
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "user") {
      navigateTo("/");
    } else if (this.props.isLogin === "guest" || this.props.isLogin === "") {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="product-management">
        <div className="top-tool">
          <Link to="/addProduct" className="p-button square-size" onClick={this.setAddButton} ><FontAwesomeIcon icon={faPlus} /></Link>
        </div>

        <table className="product-data">
          <tbody>
            <tr>
              <th>序號</th>
              <th>品牌</th>
              <th>品名</th>
              <th>色票</th>
              <th className="t-width">描述</th>
              <th>最近一次修改時間</th>
              <th>修改</th>
              <th>刪除</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Maybelline</td>
              <td>夢幻奇蹟無瑕粉底液</td>
              <td>BO0 白皙色</td>
              <td>保濕粉底液具卓越遮瑕力，能完美修飾毛孔、細紋、斑點、膚色不均等各式肌膚瑕疵，打造如絲緞般的輕柔無瑕感，夢幻上質美肌，即刻實現！</td>
              <td>2019/10/10</td>
              <td><a className="p-button b-size" onClick={this.setEdditButton} >修改</a></td>
              <td><a className="p-button b-size" onClick={this.setDeleteButton}>刪除</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Maybelline</td>
              <td>夢幻奇蹟無瑕粉底液</td>
              <td>BO0 白皙色</td>
              <td>保濕粉底液具卓越遮瑕力，能完美修飾毛孔、細紋、斑點、膚色不均等各式肌膚瑕疵，打造如絲緞般的輕柔無瑕感，夢幻上質美肌，即刻實現！</td>
              <td>2019/10/10</td>
              <td><a className="p-button b-size" onClick={this.setEdditButton}>修改</a></td>
              <td><a className="p-button b-size" onClick={this.setDeleteButton}>刪除</a></td>
              <DialogBox open={this.state.open} onClose={this.handleClose} button={this.state.button}></DialogBox>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(ProductManagement)