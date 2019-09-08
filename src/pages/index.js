import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';
import Features from '../components/Features/Features';
import Hot from '../components/Hot/Hot';
import AboutTeam from '../components/AboutTeam/AboutTeam';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Layout>
        <News />
        <Features />
        <Hot />
        <AboutTeam />
      </Layout>
    )
  }
}
export default Index;
