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

  submitOrder = () => {
    const data = JSON.parse(localStorage.getItem("product"));
    const orderObj = []
    data.forEach(product => {
      const data = { "Product_Id": product.id, "Cheapest_price": product.Price, "Quantity": product.quantity }
      orderObj.push(data)
    })
    console.log(orderObj);
    this.props.dispatch({
      type: "cart/Send_Cart",
      payload: orderObj,
      coupon: -1,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
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
          console.log(response);
        }
      }
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
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
      <div className="order-content">
        <div className="order-list">
          <p className="order-tit">訂單明細</p>
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

