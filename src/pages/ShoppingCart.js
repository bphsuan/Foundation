import React from "react";
import Layout from '../components/Layout/Layout';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Layout>
        <ShoppingCart />
      </Layout>
    )
  }
}
export default Cart

