import React from "react";
import Layout from '../components/Layout/Layout';
import ProductContent from '../components/ProductContent/ProductContent';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Layout>
        <ProductContent />
      </Layout>
    )
  }
}
export default Product

