import React from 'react';
import test from '../../images/pic01.png';
import './DetectionOutcome.scss';

class DetectionOutcome extends React.Component {
  render() {
    return (
      <div className="detection-outcome">
        <div className="detection-origin">
          <img src={test} />
        </div>
        <div className="detection-text">
          <h1>檢測結果</h1>
          <p>| 推薦之粉底液</p>
        </div>
      </div>
    )
  }
}

export default DetectionOutcome