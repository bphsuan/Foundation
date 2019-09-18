import React from 'react';
import './Title.scss';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="title">
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default Title;
