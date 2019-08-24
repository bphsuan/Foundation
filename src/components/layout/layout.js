import React from "react"
import Header from "../Header/Header"
import "./layout.scss"
export default ({ children }) => (
  <div>
    <Header></Header>
    {children}
  </div>
)