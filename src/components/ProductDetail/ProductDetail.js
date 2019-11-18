import React from "react"
import { Link } from "gatsby"
import "./ProductDetail.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  addCart = () => {
    const id = this.props.Product.Product_Id;
    console.log(id);
    this.props.dispatch({
      type: "cart/Add_Cart",
      payload: id,
      callback: resMsg => {
        console.log(resMsg);
        alert(resMsg);
      }
    })
  }
  render() {
    return (
      <div className="detail-content">
        <Link to="/Products">
          <FontAwesomeIcon icon={faArrowLeft} /> 回到產品介紹
          </Link>
        <div className="detail">
          <div className="detail-img">
            <img src={PicServer + this.props.Product.Url} />
          </div>
          <div className="detail-text">
            <p className="brand">{this.props.Product.Brand}</p>
            <p className="name">{this.props.Product.Name}</p>
            <p className="new-price">
              <span className="price">
                {this.props.Product.Cheapest_price}
              </span>
              {this.props.Product.Original_price}
            </p>
            <p className="description">{this.props.Product.Info}</p>
            <br />
            <FontAwesomeIcon icon={faHeart} className="favorite" />
            <button onClick={this.addCart}>
              <FontAwesomeIcon icon={faCartPlus} className="addCart" />
              加入購物車
             </button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(ProductDetail)
