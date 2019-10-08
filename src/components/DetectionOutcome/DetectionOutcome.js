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
        {
          id: 1,
          img: img1,
          brand: "essence",
          name: "艾森絲16 hr 持久粉底液 30",
          new_price: "178",
          price: "179"
        },
        {
          id: 2,
          img: img2,
          brand: "RIMMEL",
          name: "倫敦芮魅極限長效持久粉底液 (103 柔膚色) 30ml",
          new_price: "425",
          price: "450"
        },
      ]
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