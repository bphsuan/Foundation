import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StepNext.scss';

class StepPrevious extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <button className="next" onClick={this.props.onClick}>
          {this.props.next}
          <FontAwesomeIcon icon={this.props.icon} />
        </button>
      </div>
    )
  }
}

export default StepPrevious;