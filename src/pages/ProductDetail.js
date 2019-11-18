import React, { Component } from "react";
import Layout from '../components/Layout/Layout';
import ProductDetail from '../components/ProductDetail/ProductDetail';
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Layout>
        <ProductDetail Product={this.props.pageContext.product} />
      </Layout>
    )
  }
}

export default Detail;