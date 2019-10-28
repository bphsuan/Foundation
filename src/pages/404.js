import React from 'react';
import Layout from '../components/layout/layout';
import Logo from '../images/background/foundationLogoInBlack.png';
import { Link } from 'gatsby';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const divStyle = {
      width: "100%",
      height: "100%",
      fontFamily: "sans-serif, 'Microsoft JhengHei', '微軟正黑體'",
      textAlign: "center",
      lineHeight: "2",
    }
    const titleStyle = {
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "5px"
    }
    const contentStyle = {
      fontSize: "20px",
    }
    const imgStyle = {
      width: "200px",
      height: "auto",
      margin: "15% 20px 0 auto",
    }
    const buttonStyle = {
      margin: "0",
      padding: "0",
      fontFamily: "sans-serif, 'Microsoft JhengHei', '微軟正黑體'",
      width: "100px",
      height: "40px",
      margin: "20px auto",
      backgroundColor: "#343434",
      color: "#fff",
      fontSize: "18px",
      display: "block",
      textAlign: "center",
      lineHeight: "40px",
      transition: "all 0.5s",
      letterSpacing: "3px",
      borderRadius: "0"
    }
    return (
      <div style={divStyle}>
        <img src={Logo} style={imgStyle} />
        <br />
        <span style={titleStyle}>Page Not Found</span>
        <br />
        <span style={contentStyle}>Oops, The page you are looking for has been removed or relocated.</span>
        <br />
        <Link
          to="/"
          style={buttonStyle}>
          回首頁
        </Link>
      </div>
    )
  }
}
export default NotFound;