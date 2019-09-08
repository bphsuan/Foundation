import React from 'react';
import './ToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class ToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0
    }
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  render() {
    return (
      <div className="top-content" onClick={() => { this.scrollToTop(); }}>
        <FontAwesomeIcon icon={faChevronUp} className="top-icon" />
      </div>
    )
  }
}

export default ToTop