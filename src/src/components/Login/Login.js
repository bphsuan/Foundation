import React from 'react'
import { Link } from 'gatsby'


import './style.scss'
class Login extends React.Component {
  render() {

    return (
      <div className="login_bg">
        <div className="login">
          <lable>帳號:</lable> <input type="text" className="input" />
          <br />
          <lable> 密碼:</lable>  <input type="text" className="input" />
          <br />
          <Link to="/">回首頁 </Link> <Link to="/Register/">還不是會員?</Link>
        </div>
      
      </div>
    )
  }
}

export default Login