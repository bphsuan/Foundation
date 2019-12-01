import React from "react"
import test from "../../images/pic01.png"
import "./Detection.scss"
import upload from "../../images/upload.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { connect } from "react-redux"
import { navigate } from "gatsby"

const DetectPicUrl = "http://foundation.hsc.nutc.edu.tw"
class DetectionOutcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      setOpen: false,
      isDetect: false,
      picture: null,
      products: [],
      color: "#FFDDAA",
      outcome: [],
    }
  }
  componentDidMount() {
    const token = window.localStorage.getItem("token")
      ? JSON.parse(window.localStorage.getItem("token"))
      : {
          token: [],
        }
    window.localStorage.getItem(token)
    if (token.token[1] === "admin") {
      navigate("/")
    } else if (window.localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login")
        },
      })
      navigate("/Login")
    }
  }
  handleClickOpen() {
    this.setState({
      setOpen: true,
      open: true,
    })
  }
  handleCancel() {
    this.setState({
      setOpen: false,
      open: false,
    })
  }
  handleClose() {
    const ImgData = this.state.picture
    let form = new FormData()
    form.append("file", ImgData)
    if (this.state.picture != null) {
      this.props.dispatch({
        type: "face/uploadUserPic",
        payload: form,
        callback: response => {
          this.setState({ outcome: response })
          console.log("回傳:" + JSON.stringify(response)) //要把json格式轉字串 不然結果是[object,object]
          // if (response === "上傳圖片成功") {
          //   alert(response);
          //   this.setState({
          //     setOpen: false,
          //     open: false,
          //   })
          //   window.location.reload();
          // }
        },
      })
    }
    this.setState({
      setOpen: false,
      open: false,
    })
  }
  upload(e) {
    this.setState({
      picture: e.target.files[0],
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
      borderRadius: "0",
    }
    const apear = {
      display: "block",
    }
    const dispear = {
      display: "none",
    }
    return (
      <div>
        <div className="detection-header">
          <img
            src={upload}
            onClick={this.handleClickOpen.bind(this)}
            title="上傳圖片"
          />
          <Dialog
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">上傳欲檢測之圖片</DialogTitle>
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
                onChange={this.upload.bind(this)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancel.bind(this)} style={button}>
                取消
              </Button>
              <Button onClick={this.handleClose.bind(this)} style={button}>
                上傳
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div
          className="detection-outcome"
          style={this.state.isDetect ? apear : dispear}
        >
          <div className="detection-origin">
            <img src={test} />
          </div>
          <div className="detection-text">
            <h1>檢測結果</h1>
            <p>| 我的膚色</p>
            <div
              className="detect-color"
              style={{
                height: "20px",
                width: "150px",
                backgroundColor: this.state.color,
              }}
            ></div>
            <p>| 推薦之粉底液</p>
            {/* <ProductContent
            products={this.state.products}
          /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(DetectionOutcome)
