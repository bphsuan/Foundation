import React from "react";
import Layout from '../components/Layout/Layout';
import PersonalHeader from "../components/PersonalHeader/PersonalHeader";
import ProductHistory from '../components/ProductHistory/ProductHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DealHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <Layout>
        <PersonalHeader />
        <ProductHistory />
      </Layout>
    )
  }
}

export default DealHistory;