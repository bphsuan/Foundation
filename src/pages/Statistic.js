import React from "react";
import Layout from '../components/Layout/Layout';
import Chart from '../components/Chart/Chart';

class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Layout>
        <Chart />
      </Layout>
    )
  }
}
export default Statistic