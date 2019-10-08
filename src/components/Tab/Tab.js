import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div
        onClick={() => this.props.onChangeTab(this.props.id)}
        className={'tab ' + (this.props.id === this.props.activeTab ? 'active' : '')}
      >
        <FontAwesomeIcon
          className="icon"
          icon={this.props.icon}
        />
        <br />
        <span> {this.props.name}</span>
      </div>
    )
  }
}

export default Tab;