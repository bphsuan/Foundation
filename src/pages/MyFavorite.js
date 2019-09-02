import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PersonalHeader from "../components/PersonalHeader/PersonalHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <Layout>
        <PersonalHeader />
      </Layout>
    )
  }
}

export default MyFavorite;