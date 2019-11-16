import React from 'react';
import Coupon from './CouponItem';
import './Coupon.scss';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

class CouponContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: []
    }
  }
  componentDidMount() {
    this.getCoupon();
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
  render() {
    return (
      <div className="coupon-content">
        {this.state.coupons.map((coupon) => {

          return (
            <Coupon
              id={coupon.CouponRecord_Id}
              topic={coupon.Name}
              discount={coupon.Coupon_price}
              deadline={coupon.ExpiryTime.split("T", 1)[0]}
            />
          )
        }
        )}
      </div>
    )
  }
}

export default connect()(CouponContent)