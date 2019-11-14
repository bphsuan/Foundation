import React from "react";
import './CheckoutWay.scss';
import StepNext from '../StepNext/StepNext';
import StepPrevious from '../StepPrevious/StepPrevious';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
import { Link } from 'gatsby';

class CheckoutWay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: " 取消",
      next: "下一步 ",
      checkout: "",
      isCreditCard: true,
      card: "",
      products: []
    }
  }
  componentDidMount() {
    this.GET_Cart()
    const quantity = JSON.parse(localStorage.getItem("product1"))
    // console.log(quantity);
  }
  GET_Cart = () => {
    this.props.dispatch({
      type: "cart/GET_Cart",
      callback: response => {
        this.setState({
          products: response
        })
        console.log(this.state.products);
      }
    })
  }
  checkoutWay = (e) => {
    this.setState({
      checkout: e.target.value,
    }, () => {  //setState異步
      if (this.state.checkout === "creditCard") {
        this.setState({
          isCreditCard: false,
        })
      } else {
        this.setState({
          isCreditCard: true,
        })
      }
    })
  }
  card = (e) => {
    this.setState({
      card: e.target.value,
    })
    console.log(this.state.card);
  }
  //格式錯誤檢查
  checkoutisEmpty = () => {
    if (this.state.checkout === "") {
      alert("請選擇付款方式");
      console.log("1");
    } else if (this.state.checkout === "creditCard") {
      alert("請輸入信用卡");
    } else {
      navigateTo("/Delivery");
    }
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
      console.log(this.props.isLogin);
      navigateTo("/");
    } else if (localStorage.length === 0) {
      console.log(this.props.isLogin);
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="checkout-content">
        <div className="checkout-list">
          {this.state.products.map((product, i) => {
            return (
              <p key={i}>{product.Name}</p>
            )
          })}
          <p className="sum">total</p>
        </div>
        <div className="checkout-way">
          <input
            type="radio"
            name="checkoutway"
            value="afterDelivery"
            onChange={this.checkoutWay.bind(this)}
          />
          <span> 貨到付款</span>
          <br />
          <input
            type="radio"
            name="checkoutway"
            value="creditCard"
            onChange={this.checkoutWay.bind(this)}
          />
          <span> 信用卡付款</span>
          <br />
          <input
            type="text"
            placeholder="請輸入信用卡"
            onChange={this.card}
            disabled={this.state.isCreditCard}
          />
        </div>
        <Link to="/ShoppingCart">
          <StepPrevious
            previous={this.state.previous}
            icon={faArrowLeft}
          />
        </Link>
        <StepNext
          next={this.state.next}
          icon={faArrowRight}
          onClick={this.checkoutisEmpty}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(CheckoutWay)

