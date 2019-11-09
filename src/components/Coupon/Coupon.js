import React from 'react';
import Coupon from './CouponItem';
import './Coupon.scss';

class CouponContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="coupon-content">
        {this.props.coupons.map((coupon) => {
          return (
            <Coupon
              id={coupon.id}
              topic={coupon.topic}
              discount={coupon.discount}
              deadline={coupon.deadline}
            />
          )
        }
        )}
      </div>
    )
  }
}

export default CouponContent