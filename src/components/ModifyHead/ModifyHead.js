import React from 'react'
import { Link } from 'gatsby'
import './ModifyHead.scss'
import defaultHead from '../../images/Default.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class ModifyHead extends React.Component {
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
        <img src={defaultHead} />
        <span onClick={this.handleClickOpen.bind(this)} >更換頭貼</span>
        <Dialog open={this.state.open} onClose={this.handleClose.bind(this)} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">上傳新的頭貼</DialogTitle>
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} style={button}>取消</Button>
            <Button onClick={this.handleClose.bind(this)} style={button}>上傳</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ModifyHead 