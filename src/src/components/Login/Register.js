import React from 'react'
import { Link } from 'gatsby'

import './style.scss'
class Login extends React.Component {
  render() {

    return (

      <div className="login_bg">
        <div className="login">
          帳號: <input type="text" className="input" />
          密碼: <input type="text" className="input" />
          信箱: <input type="text" className="input" />
          <br />
          <Link to="/">回首頁</Link>
        </div>
      </div>
    )
  }
}

export default Login