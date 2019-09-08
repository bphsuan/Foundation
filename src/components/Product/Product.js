import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div

        className="product"
      >
        <div className="product-func">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartPlus} />
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="product-text">
          <p className="product-brand"></p>
          <p className="product-name"></p>
          <p className="product-color"></p>
          <input type="number" value="1" />
          <p className="product-dealtime"></p>
        </div>
        <img />
      </div>
    )
  }
}

export default Product;