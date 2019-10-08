import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';
import Features from '../components/Features/Features';
import Hot from '../components/Hot/Hot';
import AboutTeam from '../components/AboutTeam/AboutTeam';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
class Index extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      name: cookies.get('name') || 'Ben'
    }
  }
  handleNameChange(name) {
    const { cookies } = this.props;
 
    cookies.set('name', name, { path: '/' });
    this.setState({ name });
  }
  render() {
    const { name } = this.state;
    return (
      <Layout name={name}>
        {console.log(this.state.name)}
        <News />
        <Features />
        <Hot />
        <AboutTeam />
      </Layout>
    )
  }
}
export default withCookies(Index);
