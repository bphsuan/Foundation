import React from 'react';
import './OrderCheck.scss';
import StepPrevious from '../StepPrevious/StepPrevious';
import StepNext from '../StepNext/StepNext';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';

class OrderCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: " 上一步",
      next: "送出 ",
      products: [],
      coupon: "",
      couponValue: "",
      sum: "",
      checkout: "",
      delivery: "",
      deliveryInfo: [],
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
    this.getData();
  }
  getData = () => {
    const products = JSON.parse(window.localStorage.getItem("product"));
    const coupon = JSON.parse(window.localStorage.getItem("coupon"));
    const couponValue = JSON.parse(window.localStorage.getItem("couponValue"));
    const sum = JSON.parse(window.localStorage.getItem("sum"));
    const checkout = JSON.parse(window.localStorage.getItem("checkout"));
    const delivery = JSON.parse(window.localStorage.getItem("delivery"));
    const deliveryInfo = JSON.parse(window.localStorage.getItem("deliveryInfo"));
    this.setState({
      products: products,
      coupon: coupon,
      couponValue: couponValue,
      sum: sum,
      checkout: checkout,
      delivery: delivery,
      deliveryInfo: deliveryInfo
    })
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

  submitOrder = () => {
    const data = JSON.parse(window.localStorage.getItem("product"));
    const orderObj = []
    data.forEach(product => {
      const data = { "Product_Id": product.id, "Cheapest_price": product.Price, "Quantity": product.quantity }
      orderObj.push(data)
    })
    console.log(orderObj);
    this.props.dispatch({
      type: "cart/Send_Cart",
      payload: orderObj,
      coupon: JSON.parse(window.localStorage.getItem("coupon")),
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          alert("購買成功!")
          navigate("/Products")
        }
      }
    })
    this.handleClose();
    this.removeCart();
  }
  removeCart = () => {
    this.props.dispatch({
      type: "cart/Remove_Cart",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          window.localStorage.removeItem("sum");
          window.localStorage.removeItem("coupon");
          window.localStorage.removeItem("couponValue");
          window.localStorage.removeItem("sum");
          window.localStorage.removeItem("checkout");
          window.localStorage.removeItem("delivery");
          window.localStorage.removeItem("deliveryInfo");
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
    return (
      <div className="order-content" >
        <div className="order-list">
          <p className="order-tit">訂單明細</p>
          {this.state.products.map((product, i) => {
            return (
              <p key={i}>- {product.Name} ${product.Price} X {product.quantity}</p>
            )
          })}
          <p>使用優惠券： - {this.state.couponValue}</p>
          <p>總金額： {this.state.sum}</p>
          <p>付款方式： {this.state.checkout === "afterDelivery" ? "貨到付款" : "信用卡"}</p>
          <p>配送方式： {this.state.delivery === "toHome" ? "宅配到府" : "便利商店取貨"}</p>
          <p>配送明細：</p>
          {this.state.deliveryInfo.map((perInfo, i) => {
            return (
              <div key={i}>
                <p>[姓名] {perInfo.customer}</p>
                <p>[電話] {perInfo.tel}</p>
                <p>{this.state.delivery === "toHome" ? "[地址]" : "[店家]"} {this.state.delivery === "toHome" ? perInfo.address : perInfo.way}</p>
                <p>{this.state.delivery === "toHome" ? "" : "[地區]"} {this.state.delivery === "toHome" ? "" : perInfo.location}</p>
                <p>{this.state.delivery === "toHome" ? "" : "[分店]"} {this.state.delivery === "toHome" ? "" : perInfo.store}</p>
              </div>
            )
          })}
        </div>
        <Link to="/Delivery">
          <StepPrevious
            previous={this.state.previous}
            icon={faArrowLeft}
          />
        </Link>
        <StepNext
          next={this.state.next}
          icon={faCheck}
          onClick={this.handleClickOpen.bind(this)}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title" >
          <DialogTitle
            id="form-dialog-title">
            確定送出訂單？
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="DialogContent">
                送出即無法取消訂單。
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose.bind(this)}
              style={button}>
              取消
            </Button>
            <Button
              onClick={this.submitOrder.bind(this)}
              style={button}>
              送出
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

export default connect(mapStateToProps)(OrderCheck)

