import React from "react";
import './CheckoutWay.scss';
import StepNext from '../StepNext/StepNext';
import StepPrevious from '../StepPrevious/StepPrevious';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
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
      products: [],
      sum: 0
    }
  }
  componentDidMount() {
    this.GET_Cart();

    // console.log(quantity);
  }
  GET_Cart = () => {
    const data = JSON.parse(localStorage.getItem("product"));
    this.setState({
      products: data
    }, () => {
      console.log("hi" + this.state.products);
      this.priceSum();
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
      navigate("/Delivery");
    }
  }
  priceSum = () => {
    let sum = 0;
    console.log(this.state.products);
    this.state.products.forEach(product => {
      sum += product.Price * product.quantity
    })
    localStorage.setItem("sum", JSON.stringify(sum));
    this.setState({
      sum: sum
    }, () => {
      console.log(this.state.sum);
    })

  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
      console.log(this.props.isLogin);
      navigate("/");
    } else if (localStorage.length === 0) {
      console.log(this.props.isLogin);
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login");
        }
      })
      navigate("/Login");
    }
    return (

      <div className="checkout-content">
        <div className="checkout-list">
          {this.state.products.map((product, i) => {
            return (
              <p key={i}>{product.Name} ${product.Price} X {product.quantity}</p>
            )
          })}
          <br />
          <p>使用優惠券</p>
          <input type="radio" /><span> 生日禮</span>
          <p className="sum">總金額 ${this.state.sum}</p>
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

