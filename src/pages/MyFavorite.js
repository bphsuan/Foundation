import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PersonalHeader from "../components/PersonalHeader/PersonalHeader";
import TabContent from '../components/TabContent/TabContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      tabs: [
        { id: 1, name: "我的最愛", icon: faHeart },
        { id: 2, name: "我的優惠券", icon: faTicketAlt }
      ]
      , location: ""
    }
  }
  componentDidMount() {
    this.activeTab();
    this.setState({
      location: window.location
    })
  }
  activeTab() {
    const hash = window.location.hash;
    switch (hash) {
      case '#favorite':
        this.setState({ activeTab: 1 });
        break;
      case '#coupon':
        this.setState({ activeTab: 2 });
        break;
    }
  }
  onChangeTab(id) {
    if (id === 1) {
      if (window.history) {
        window.history.pushState(null, null, "#favorite")
      } else {
        window.location.hash = "#favorite"
      }
      this.setState({ activeTab: id })
    } else if (id === 2) {
      if (window.history) {
        window.history.pushState(null, null, "#coupon")
      } else {
        window.location.hash = "#coupon"
      }
      this.setState({ activeTab: id })
    }
  }
  render() {
    return (
      <Layout>
        <PersonalHeader />
        <TabContent
          tabs={this.state.tabs}
          activeTab={this.state.activeTab}
          onChangeTab={this.onChangeTab.bind(this)}
        />
      </Layout>
    )
  }
}

export default MyFavorite;