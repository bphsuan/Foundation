import React from 'react';
import './DetectionHeader.scss';
import upload from '../../images/upload.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

class Detection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false
    }
  }

  handleClickOpen() {
    this.setState({
      setOpen: true,
      open: true
    })
  }

  handleClose() {
    this.setState({
      setOpen: false,
      open: false
    })
  }

  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
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

    return (
      <div className="detection-header">
        <img src={upload} onClick={this.handleClickOpen.bind(this)} title="上傳圖片" />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title" >
          <DialogTitle
            id="form-dialog-title">
            上傳欲檢測之圖片
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              請點選『選擇檔案』上傳您的圖片。
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose.bind(this)}
              style={button}>
              取消
            </Button>
            <Button
              onClick={this.handleClose.bind(this)}
              style={button}>
              上傳
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

export default connect(mapStateToProps)(Detection)