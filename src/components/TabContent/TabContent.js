import React from "react"
import Tab from "../Tab/Tab"
import "./TabContent.scss"

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="tab-content">
        {this.props.tabs.map((tab) => {
          return (
            <Tab
              id={tab.id}
              name={tab.name}
              icon={tab.icon}
              activeTab={this.props.activeTab}
              onChangeTab={this.props.onChangeTab}
            />
          )
        }
        )}

      </div>
    )
  }
}

export default TabContent