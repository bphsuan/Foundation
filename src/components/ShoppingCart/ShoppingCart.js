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
        {this.state.products.map((product, i) => {
          return (
            <Product
              key={i}
              id={product.Product_Id}
              img={product.Url}
              brand={product.Brand}
              name={product.Name}
              new_price={product.Cheapest_price}
            />
          )
        })}
      </div>
    )
  }
}

export default connect()(ShoppingCart);