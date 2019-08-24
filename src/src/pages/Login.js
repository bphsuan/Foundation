import React from 'react'
import { Link } from 'gatsby'
import Login from '../components/Login/Login'
import Layout from '../components/layout/layout'
class Login_page extends React.Component {
  render() {
    return (
      <Layout>        
          <Login></Login>       
      </Layout>
    )
  }
}

export default Login_page