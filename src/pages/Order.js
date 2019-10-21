import React from "react";
import Layout from '../components/Layout/Layout';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Title from '../components/Title/Title';
import OrderCheck from '../components/OrderCheck/OrderCheck';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "order",
      name: "確認訂單",
    }
  }
  render() {
    return (
      <Layout>
        <ProgressBar
          progressActive={this.state.progress}
        />
        <Title name={this.state.name} />
        <OrderCheck />
      </Layout>
    )
  }
}
export default Order

