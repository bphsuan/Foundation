import React from "react"
import './DetectionHistory.scss';
class DetectionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detect: [],
      color: '#FFDDAA'
    }

  }
  render() {
    const style = {

    }
    return (
      <div className="detect-content">
        {/* {this.state.detect.map((detect, i) => {
          let buyTime = detect.detectTime.split("T", 1)[0]
          return ( */}
        <div
          // key={i}
          // id={detect.id}
          className="detect"
        >
          <div className="detect-text">
            <p>我的色號</p>
            <div className="detect-color" style={{ height: '20px', backgroundColor: this.state.color, }}></div>
            <p className="detect-">推薦之產品</p>
            <p className="detect-product">MAC粉底液 C03</p>

            <p className="time">2018-10-10</p>
          </div>
        </div>
        {/* )
        })} */}
      </div>
    )
  }
} export default DetectionHistory;