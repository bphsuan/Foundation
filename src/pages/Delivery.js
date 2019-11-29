import React from "react";
import Layout from '../components/Layout/Layout';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Title from '../components/Title/Title';
import DeliveryWay from '../components/DeliveryWay/DeliveryWay';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      progress: "delivery",
      name: "配送方式",
    }
  }
  FinishCheckout = () => {

  }
  render() {
    return (
      <Layout>
        <ProgressBar
          progressActive={this.state.progress}
        />
        <Title name={this.state.name} />
        <DeliveryWay />
      </Layout>
    )
  }
}
export default Delivery

