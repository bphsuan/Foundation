import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ProductHeader from '../components/ProductHeader/ProductHeader'
import ProductContent from '../components/ProductContent/ProductContent'
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          brand: "brand",
          name: "name",
          img: "img",
          proList: true,
          favorite: false,
          addCart: false,
          cartList: false,
          quantity: false,
          dealtime: false
        }
      ]
    }
  }
  render() {
    return (
      <Layout>
        <ProductHeader></ProductHeader>

      </Layout>
    )
  }
}
export default Product

