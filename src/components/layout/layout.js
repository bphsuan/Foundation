import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Layout.scss"
export default ({ children }) => (
  <div>
    <Header></Header>
    <div className="content">
      {children}
    </div>
    <Footer></Footer>
  </div>
)