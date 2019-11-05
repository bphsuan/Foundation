import React from "react";
import Layout from '../components/Layout/Layout';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import StepNext from '../components/StepNext/StepNext';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
// import img1 from '../images/1.jpg';
// import img2 from '../images/2.jpg';
// import img3 from '../images/3.jpg';
// import img4 from '../images/4.jpg';
import { Link } from 'gatsby';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "結帳 ",
      // products: [
      //   {
      //     id: 1,
      //     img: img1,
      //     brand: "essence",
      //     name: "艾森絲16 hr 持久粉底液 30",
      //     new_price: "178",
      //   },
      //   {
      //     id: 2,
      //     img: img2,
      //     brand: "RIMMEL",
      //     name: "倫敦芮魅極限長效持久粉底液 (103 柔膚色) 30ml",
      //     new_price: "425",
      //   },
      //   {
      //     id: 3,
      //     img: img3,
      //     brand: "KANEBOITBE媚點",
      //     name: "防曬保濕礦物粉底液(健康膚色)OC-E1 (25g)",
      //     new_price: "275",
      //   },
      //   {
      //     id: 4,
      //     img: img4,
      //     brand: "KATE 凱婷",
      //     name: "凱婷 零瑕肌密粉底液(亮膚色)00 (30ml)",
      //     new_price: "500",
      //   },
      // ]
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

