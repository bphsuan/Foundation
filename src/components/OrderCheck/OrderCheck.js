import React from 'react';
import './OrderCheck.scss';
import StepPrevious from '../StepPrevious/StepPrevious';
import StepNext from '../StepNext/StepNext';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
import { Link } from 'gatsby';


class OrderCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: " 上一步",
      next: "送出訂單 ",
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
      console.log(this.props.isLogin);
      navigateTo("/");
    } else if (this.props.isLogin === "guest" || this.props.isLogin === "") {
      console.log(this.props.isLogin);
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
      <div className="order-content">
        <div className="order-list"></div>
        <Link to="/Delivery">
          <StepPrevious
            previous={this.state.previous}
            icon={faArrowLeft}
          />
        </Link>
        <StepNext
          next={this.state.next}
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
              onClick={this.handleClose.bind(this)}
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

