import React, { Component } from "react";
import Layout from '../components/Layout/Layout';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Layout>
        <ProductDetail />
      </Layout>
    )
  }
}

export default Detail;