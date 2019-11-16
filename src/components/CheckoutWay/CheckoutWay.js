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
      coupons: [],
      sum: 0
    }
  }
  componentDidMount() {
    this.GET_Cart();
  }
  GET_Cart = () => {
    const data = JSON.parse(localStorage.getItem("product"));
    this.setState({
      products: data
    }, () => {
      this.priceSum();
    })
    this.getCoupon();
  }
  checkoutWay = (e) => {
    localStorage.removeItem("checkout");
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
    localStorage.setItem("checkout", JSON.stringify(e.target.value));
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
    } else if (this.state.checkout === "creditCard") {
      alert("請輸入信用卡");
    } else {
      navigate("/Delivery");
    }
  }
  getCoupon = () => {
    this.props.dispatch({
      type: "coupon/Get_coupon",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          console.log(response);
          this.setState({
            coupons: response
          })
        }
      }
    })
  }
  chooseCoupon = (e) => {
    const coupon = Number(e.target.value);
    const couponId = e.target.id;
    this.setState({
      sum: 0
    })
    this.priceSum();
    localStorage.removeItem("sum");
    localStorage.removeItem("coupon");
    setTimeout(() => {
      this.setState({
        sum: this.state.sum - coupon
      })
      localStorage.setItem("sum", JSON.stringify(this.state.sum));
      localStorage.setItem("coupon", JSON.stringify(couponId));
    }, 500);
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
          <p className="checkout-tit">購買清單</p>
          {this.state.products.map((product, i) => {
            return (
              <p key={i}>- {product.Name} ${product.Price} X {product.quantity}</p>
            )
          })}
          <br />
          <p className="checkout-tit">使用優惠券</p>
          <input
            type="radio"
            name="coupon"
            id="-1"
            value="0"
            onChange={this.chooseCoupon.bind(this)}
          /><span> 無</span><br />
          {this.state.coupons.map((coupon) => {
            return (
              <div>
                <input
                  type="radio"
                  name="coupon"
                  id={coupon.CouponRecord_Id}
                  value={coupon.Coupon_price}
                  onChange={this.chooseCoupon.bind(this)}
                />
                <span> {coupon.Name}</span><br />
              </div>
            )
          }
          )}

          <p className="sum">總金額 ${this.state.sum}</p>
        </div>
        <div className="checkout-way">
          <p className="checkout-tit">選擇付款方式</p>
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

