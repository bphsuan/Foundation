import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      disable: true
    }
  }
  minus = () => {
    if (this.state.quantity === 1) {
      this.setState({
        disable: true
      })
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
        disable: false
      })
    }
  }
  plus = () => {
    this.setState({
      quantity: this.state.quantity + 1,
      disable: false
    })
  }
  render() {
    return (
      <div id={this.props.id} className="product">
        <div className="product-img">
          <img src={this.props.img} />
        </div>
        <div className="product-func">
          <FontAwesomeIcon icon={faTimes}
            className="delete"
          />
        </div>
        <div className="product-text">
          <p className="product-brand">{this.props.brand}</p>
          <p className="product-name">{this.props.name}</p>
          <p className="new-price">{this.props.new_price}</p>
          <button
            className="quantity"
            onClick={this.minus.bind(this)}>
            -
          </button>
          <input type="text"
            value={this.state.quantity}
          />
          <button
            className="quantity"
            onClick={this.plus.bind(this)}>
            +
          </button>
        </div>
      </div>

    )
  }
}

export default ShoppingItem;