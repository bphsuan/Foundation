import React from 'react';

class CouponItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="coupon-item">
        <p className="topic">{this.props.topic}</p>
        <p className="discount">現折{this.props.discount}</p>
        <p className="deadline">有效期限{this.props.deadline}</p>
      </div>
    )
  }
}

export default CouponItem