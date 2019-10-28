import React from 'react';
import Product from '../Product/Product';
import './ProductContent.scss';

class ProductContent extends React.Component {
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
              key={product.id}
              id={product.id}
              img={product.img}
              brand={product.brand}
              name={product.name}
              favorite={product.favorite}
              addFavorite={this.props.addFavorite}
              new_price={product.new_price}
              price={product.price}
            />
          )
        })}

      </div>
    )
  }
}

export default ProductContent;