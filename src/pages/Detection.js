import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Detection from '../components/Detection/Detection';

class FaceDetection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <Detection />
      </Layout>
    )
  }
}
export default FaceDetection
