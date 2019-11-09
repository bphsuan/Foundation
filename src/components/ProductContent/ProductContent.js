import React from 'react';
import Product from '../Product/Product';
import './ProductContent.scss';
import { connect } from "react-redux";

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = () => {
    this.props.dispatch({
      type: "product/Get_product",
      callback: response => {
        console.log(response);
        this.setState({
          products: response
        })
      }
    })
  }

  render() {
    return (
      <div className="product-content">

        {this.state.products.map((product) => {
          return (
            <Product
              key={product.Product_Id}
              id={product.Product_Id}
              img={PicServer + product.Url}
              brand={product.Brand}
              name={product.Name}
              favorite={product.favorite}
              addFavorite={this.props.addFavorite}
              new_price={product.Cheapest_price}
              price={product.Original_price}
            />
          )
        })}
      </div>
    )
  }
}

export default connect()(ProductContent);