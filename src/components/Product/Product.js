import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import ProductDetail from '../ProductDetail/ProductDetail'
import { Link } from 'gatsby'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const colorMain = {
      color: "#FF5151"
    }
    const colorGray = {
      color: "#EFEFEF"
    }
    return (
      <div id={this.props.id} className="product">
        <div className="product-func">
          <FontAwesomeIcon
            icon={faHeart}
            className="favorite"
            style={this.props.favorite ? colorMain : colorGray}
            onClick={this.props.addFavorite}
          />
          <FontAwesomeIcon
            icon={faCartPlus}
            className="addCart"
          />
        </div>

        <div className="product-img">
          <Link to={`/ProductDetail/${this.props.id}`}> <img src={this.props.img} /></Link>
        </div>
        <div className="product-text">
          <p className="product-brand">{this.props.brand}</p>
          <p className="product-name">{this.props.name}</p>
          <p className="price">{this.props.price}</p>
          <p className="new-price">{this.props.new_price}</p>
        </div>
      </div>

    )
  }
}

export default Product;