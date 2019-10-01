import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import DetectionHeader from '../components/DetectionHeader/DetectionHeader';
import DetectionOutcome from '../components/DetectionOutcome/DetectionOutcome';
class Detection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <DetectionHeader />
        <DetectionOutcome />
      </Layout>
    )
  }
}
export default Detection
