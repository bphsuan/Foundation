import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import TabContent from '../components/TabContent/TabContent'
import PersonalHeader from "../components/PersonalHeader/PersonalHeader"
import ModifyPassword from "../components/ModifyPassword/ModifyPassword"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      tabs: [
        { id: 1, name: "基本資料", icon: faIdCardAlt },
        { id: 2, name: "修改密碼", icon: faKey }
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
  componentWillReceiveProps() {
    this.activeTab();
  }
  activeTab() {
    const hash = window.location.hash;
    switch (hash) {
      case '#personInfo':
        this.setState({ activeTab: 1 });
        break;
      case '#modifyPassword':
        this.setState({ activeTab: 2 });
        break;
    }
  }
  onChangeTab(id) {
    if (id === 1) {
      if (window.history) {
        window.history.pushState(null, null, "#personInfo")
      } else {
        window.location.hash = "#personInfo"
      }
      this.setState({ activeTab: id })
    } else if (id === 2) {
      if (window.history) {
        window.history.pushState(null, null, "#modifyPassword")
      } else {
        window.location.hash = "#modifyPassword"
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
        <ModifyPassword />
      </Layout>
    )
  }
}

export default PersonalInfo;