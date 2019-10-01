import React from "react";
import Layout from '../components/Layout/Layout';
import ProductHeader from '../components/ProductHeader/ProductHeader';
import ProductContent from '../components/ProductContent/ProductContent';
import test from '../images/product.png';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 2,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 3,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 4,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 5,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 6,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 7,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        },
        {
          id: 8,
          img: test,
          brand: "brand",
          name: "name",
          new_price: "200",
          price: "250"
        }
      ]
    }
  }
  render() {
    return (
      <Layout>
        <ProductHeader />
        <ProductContent
          products={this.state.products}
        />
      </Layout>
    )
  }
}
export default Product

