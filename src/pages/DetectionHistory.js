import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PersonalHeader from "../components/PersonalHeader/PersonalHeader"
import DetectionContent from "../components/DetectionHistory/DetectionHistory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DetectionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <Layout>
        <PersonalHeader />
        <DetectionContent />
      </Layout>
    )
  }
}

export default DetectionHistory;