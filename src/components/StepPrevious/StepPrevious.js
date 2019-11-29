import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './StepPrevious.scss';

class StepPrevious extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <button className="previous">
          <FontAwesomeIcon icon={faArrowLeft} />
          {this.props.previous}
        </button>
      </div>
    )
  }
}

export default StepPrevious;