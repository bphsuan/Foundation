import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import FeedbackManagement from '../components/FeedbackManagement/FeedbackManagement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <Layout>
        <FeedbackManagement />
      </Layout>
    )
  }
}

export default Feedback;