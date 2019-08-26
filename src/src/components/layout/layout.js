import React from "./node_modules/react"
import Header from "../Header/Header"
import "./Layout.scss"
export default ({ children }) => (
  <div>
    <Header></Header>
    {children}
  </div>
)