import React from 'react';
import './ModifyHead.scss';
import defaultHead from '../../images/Default.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";

const UserPicUrl = "http://foundation_backend.hsc.nutc.edu.tw";
class ModifyHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
      hasPic: false,
      picUrl: "",
      picture: null
    }
  }
  componentDidMount() {
    this.GET_UserPic();
  }
  GET_UserPic = () => {
    this.props.dispatch({
      type: "member/GET_UserPic",
      callback: response => {
        if (response != null) {
          this.setState({
            hasPic: true,
            picUrl: UserPicUrl + response
          })
        }
      }
    })
  }
  handleClickOpen() {
    this.setState({
      setOpen: true,
      open: true
    })
  }
  handleCancel() {
    this.setState({
      setOpen: false,
      open: false
    })
  }
  handleClose() {
    const ImgData = this.state.picture;
    let form = new FormData();
    form.append('file', ImgData)
    console.log(ImgData);
    if (this.state.picture != null) {
      this.props.dispatch({
        type: "member/uploadUserPic",
        payload: form,
        callback: response => {
          if (response === "上傳圖片成功") {
            alert(response);
            this.setState({
              setOpen: false,
              open: false,
            })
            window.location.reload();
          }
        }
      })
    } else {
      this.setState({
        setOpen: false,
        open: false,
        picture: null
      })
    }
  }
  upload(e) {
    this.setState({
      picture: e.target.files[0]
    })
    console.log(this.state.picture)
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
    return (
      <div className="personal-head" >

        <img src={this.state.hasPic === true ? this.state.picUrl : defaultHead} />
        <span onClick={this.handleClickOpen.bind(this)} >更換頭貼</span>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title" >
          <DialogTitle
            id="form-dialog-title">
            上傳新的頭貼
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              請點選『選擇檔案』上傳您的新頭貼。
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label=""
              type="file"
              fullWidth
              onChange={this.upload.bind(this)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCancel.bind(this)}
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

export default connect()(ModifyHead) 