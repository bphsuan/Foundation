import React from "react"
import { Link } from "gatsby"
import "./ProductDetail.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import Layout from "../layout/layout"
const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <Layout>
        <div className="detail-content">
          <Link to="/Products">
            <FontAwesomeIcon icon={faArrowLeft} /> 回到產品介紹
          </Link>
          <div className="detail">
            <div className="detail-img">
              <img src={PicServer + this.props.pageContext.product.Url} />
            </div>
            <div className="detail-text">
              <p className="brand">{this.props.pageContext.product.Brand}</p>
              <p className="name">{this.props.pageContext.product.Name}</p>
              <p className="new-price">
                <span className="price">
                  {this.props.pageContext.product.Cheapest_price}
                </span>
                {this.props.pageContext.product.Original_price}
              </p>
              <p className="description">無</p>
              <br />
              <FontAwesomeIcon icon={faHeart} className="favorite" />
              <button>
                <FontAwesomeIcon icon={faCartPlus} className="addCart" />
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProductDetail
