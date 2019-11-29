import React from 'react';
import test from '../../images/pic01.png';
import './DetectionOutcome.scss';
import ProductContent from '../ProductContent/ProductContent';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';

class DetectionOutcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      ],
      color: '#FFDDAA'
    }
  }
  render() {
    return (
      <div className="detection-outcome">
        <div className="detection-origin">
          <img src={test} />
        </div>
        <div className="detection-text">
          <h1>檢測結果</h1>
          <p>| 我的膚色</p>
          <div className="detect-color" style={{ height: '20px', width: '150px', backgroundColor: this.state.color }}></div>
          <p>| 推薦之粉底液</p>
          {/* <ProductContent
            products={this.state.products}
          /> */}
        </div>
      </div>
    )
  }
}

export default DetectionOutcome