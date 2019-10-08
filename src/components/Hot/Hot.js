import React from 'react';
import Title from '../Title/Title';
import './Hot.scss';

class Hot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "熱銷排行 Top 3"
    }
  }
  render() {
    return (
      <div className="hot-content">
        <Title
          name={this.state.name}
        />
      </div>
    )
  }
}

export default Hot