import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        { id: 1, name: "三大特色" },
        { id: 2, name: "使用者數據分析" },
        { id: 3, name: "熱銷Top3" },
        { id: 4, name: "使用人次" },
        { id: 5, name: "關於團隊" }
      ]
    }
    console.log(this.state.titles.name);
  }
  render() {
    return (
      <Layout>
      </Layout>
    )
  }
}
export default Index;
