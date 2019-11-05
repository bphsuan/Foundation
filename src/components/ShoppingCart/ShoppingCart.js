import React from 'react';
import Product from './ShoppingItem';
import './ShoppingCart.scss';
import { connect } from "react-redux";
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    this.GET_Cart();
  }
  GET_Cart = () => {
    this.props.dispatch({
      type: "cart/GET_Cart",
      callback: response => {
        console.log(response);
        this.setState({
          products: response
        })
        console.log(this.state.products);
      }
    })
  }
  render() {
    return (
      <div className="product-content">
        {this.state.products.map((product) => {
          return (
            <Product
              id={product.id}
              img={product.img}
              brand={product.brand}
              name={product.name}
              new_price={product.new_price}
            />
          )
        })}
      </div>
    )
  }
}

export default connect()(ShoppingCart);