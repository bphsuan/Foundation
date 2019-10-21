import React from "react";
import './CheckoutWay.scss';
import StepNext from '../StepNext/StepNext';
import StepPrevious from '../StepPrevious/StepPrevious';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    }
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
    return (
      <div className="checkout-content">
        <div className="checkout-list">
          <p>list item</p>
          <p>list item</p>
          <p>list item</p>
          <p>list item</p>
          <p className="sum">total</p>
        </div>
        <div className="checkout-way">
          <input
            type="radio"
            name="checkoutway"
            value="cash"
            onChange={this.checkoutWay.bind(this)}
          />
          <span> 現金匯款</span>
          <br />
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
export default CheckoutWay

