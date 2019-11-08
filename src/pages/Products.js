import React from "react";
import Layout from '../components/Layout/Layout';
import ProductHeader from '../components/ProductHeader/ProductHeader';
import ProductContent from '../components/ProductContent/ProductContent';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  addFavorite = (e) => {
    console.log(e);
  }
  render() {
    return (
      <Layout>
        <ProductHeader />
        <ProductContent
          // products={this.state.products}
          addFavorite={this.addFavorite}
        />
      </Layout>
    )
  }
}
export default Product

