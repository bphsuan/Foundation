import React from "react";
import test from "../../images/pic01.png";
import "./Detection.scss";
import upload from "../../images/upload.png";
import loading from "../../images/loading.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import Title from '../Title/Title';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { navigate } from "gatsby";

const DetectPicUrl = "http://findyourfoundation.westindia.cloudapp.azure.com:8080"
class DetectionOutcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      setOpen: false,
      titleDescription: "檢測使用說明",
      description: true,
      loading: false,
      isDetect: false,
      picture: null,
      outcome: [],
      products: []
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
    this.setState({
      description: true,
      loading: false,
      isDetect: false
    })
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
    this.setState({
      description: false,
      loading: true,
      isDetect: false,
      outcome: [],
      products: []
    })
    const ImgData = this.state.picture
    let form = new FormData()
    form.append("file", ImgData)
    if (this.state.picture != null) {
      this.props.dispatch({
        type: "face/uploadUserPic",
        payload: form,
        callback: response => {
          this.setState({
            description: false,
            loading: false,
            isDetect: true,
            outcome: response
          })
          console.log(this.state.outcome);
          this.props.dispatch({
            type: "product/Get_productsAsc",
            callback: response => {
              this.setState({
                products: response
              })
            }
          })
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
    const apearBlock = {
      display: "block",
    }
    const apearFlex = {
      display: "flex",
    }
    const dispear = {
      display: "none",
    }
    return (
      <div>
        <div className="detection-header">
          <button
            onClick={this.handleClickOpen.bind(this)}
            title="上傳圖片"
          >上傳圖片</button>
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
          className="detection-description"
          style={this.state.description ? apearBlock : dispear}
        >
          <Title name={this.state.titleDescription} />
          <div className="text">
            <p>拍攝臉部特寫照片，並請盡量於光線充足的地方拍攝。</p>
            <p className="step"><FontAwesomeIcon icon={faArrowDown} /></p>
            <p>點選上方「上傳圖片」按鈕上傳臉部特寫照片。</p>
            <p className="step"><FontAwesomeIcon icon={faArrowDown} /></p>
            <p>請耐心稍待紅粉知己為您分析您的膚色。</p>
            <p className="step"><FontAwesomeIcon icon={faArrowDown} /></p>
            <p>查看您的分析結果。</p>
            <p className="step"><FontAwesomeIcon icon={faArrowDown} /></p>
            <p>日後也可以至會員中心 -> 檢測歷史紀錄，查看您每次的檢測結果。</p>

          </div>
        </div>
        <div
          className="detection-loading"
          style={this.state.loading ? apearBlock : dispear}
        >
          <img src={loading} />
        </div>
        <div
          className="detection-outcome"
          style={this.state.isDetect ? apearFlex : dispear}
        >
          <div className="detection-origin">
            <img src={DetectPicUrl + this.state.outcome.FaceUrl} />
          </div>
          <div className="detection-text">

            <h1>檢測結果</h1>
            <p>| 我的膚色</p>
            <div
              className="detect-color"
              style={{
                height: "20px",
                width: "150px",
                backgroundColor: this.state.outcome.FaceColor,
              }}
            ></div>
            <p>| 推薦之粉底液</p>
            {this.state.products.map((product, i) => {
              if (this.state.outcome.Product_Id === product.Product_Id) {
                return (
                  <Product
                    key={i}
                    id={product.Product_Id}
                    img={DetectPicUrl + product.Url}
                    brand={product.Brand}
                    name={product.Name}
                    color={product.Color}
                    favorite={product.isFavorite}
                    new_price={product.Cheapest_price}
                    price={product.Original_price}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(DetectionOutcome)
