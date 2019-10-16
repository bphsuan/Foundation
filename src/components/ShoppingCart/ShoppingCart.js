import React from 'react';
import Product from './ShoppingItem';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="product-content">
        {this.props.products.map((product) => {
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

export default ShoppingCart;