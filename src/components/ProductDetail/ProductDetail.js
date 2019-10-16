import React from 'react';
import { Link } from 'gatsby';
import './ProductDetail.scss';
import img1 from '../../images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';

class ProductDetail extends React.Component {
  constructor(props){
    super(props)
    console.log(props) 
  }
  render() {
    return (      
      <div className="detail-content">
        <Link to="/Products">
          <FontAwesomeIcon icon={faArrowLeft} /> 回到產品介紹
          </Link>
        <div className="detail">
          <div className="detail-img">
            <img src={img1} />
          </div>
          <div className="detail-text">
            <p className="brand">{this.props.pageContext.product.brand}</p>
            <p className="name">{this.props.pageContext.product.name}</p>
            <p className="new-price"><span className="price">179 </span>178</p>
            <p className="description">無</p>
            <br />
            <FontAwesomeIcon
              icon={faHeart}
              className="favorite"
            />
            <button>
              <FontAwesomeIcon
                icon={faCartPlus}
                className="addCart"
              />
              加入購物車
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail;