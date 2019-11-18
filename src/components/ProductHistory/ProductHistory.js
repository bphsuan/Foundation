import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ProductHistory.scss';
import { Link } from 'gatsby';
import { connect } from "react-redux";
import { navigate } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getProductHistory();
  }
  getProductHistory = () => {
    this.props.dispatch({
      type: "member/GET_BuyHistories",
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
            products: response
          })
        }
      }
    })
  }
  render() {
    return (
      <div className="product-content">
        {this.state.products.map((product, i) => {
          let buyTime = product.BuyTime.split("T", 1)[0]
          return (
            <div
              key={i}
              id={product.BuyHistory_Id}
              className="product"
            >
              <div className="product-text">
                <p className="product-brand">{product.Brand}</p>
                <p className="product-name">{product.Name}</p>
                <p className="buy-price">{product.Price} X {product.Quantity}</p>
                <p className="time">{buyTime}</p>
              </div>
            </div>
          )
        })}
      </div>

    )
  }
}

export default connect()(ProductHistory);