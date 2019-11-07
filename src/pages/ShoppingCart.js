import React from "react";
import Layout from '../components/Layout/Layout';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import StepNext from '../components/StepNext/StepNext';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "結帳 "
    }
  }

  render() {
    return (
      <Layout>
        <ShoppingCart />
        <Link to="/Checkout">
          <StepNext
            next={this.state.next}
            icon={faDollarSign}
          />
        </Link>
      </Layout>
    )
  }
}
export default Cart

