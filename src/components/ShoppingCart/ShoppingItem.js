import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      disable: true,
      product: [],
      localdata: localStorage.getItem("product")
    }
  }
  componentDidMount() {
    this.setData()
  }
  setData = () => {
    const data = localStorage.getItem("product");
    this.setState({
      product: JSON.parse(data)
    }, () => { })
  }
  minus = () => {
    localStorage.removeItem("product");
    if (this.state.quantity === 1) {
      this.setState({
        disable: true
      })
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
        disable: false
      })
      this.setState(prevState => ({
        product: prevState.product.map(el =>
          el.id === this.props.id ? { ...el, quantity: this.state.quantity - 1 } : el,
        ),
      }), () => {
        localStorage.setItem("product", JSON.stringify(this.state.product));
      });
    }
  }
  plus = () => {
    localStorage.removeItem("product");
    this.setState({
      quantity: this.state.quantity + 1,
      disable: false
    }, () => {
    })
    this.setState(prevState => ({
      product: prevState.product.map(el =>
        el.id === this.props.id ? { ...el, quantity: this.state.quantity + 1 } : el,
      ),
    }), () => {
      localStorage.setItem("product", JSON.stringify(this.state.product));
    });
  }
  deleteItem = () => {
    const id = this.props.id;
    console.log(id);
    this.props.dispatch({
      type: "cart/Delete_Cart",
      payload: id,
      callback: resMsg => {
        console.log(resMsg);
        alert(resMsg);
        window.location.reload();
      }
    })
  }
  render() {
    return (
      <div id={this.props.id} className="product">
        <div className="product-img">
          <img src={PicServer + this.props.img} />
        </div>
        <div className="product-func">
          <FontAwesomeIcon icon={faTimes}
            className="delete"
            onClick={this.deleteItem}
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

export default connect()(ShoppingItem);