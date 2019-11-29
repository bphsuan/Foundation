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

  componentDidMount() {
    const token = (window.localStorage.getItem("token")) ? JSON.parse(window.localStorage.getItem("token")) : {
      token: []
    };
    window.localStorage.getItem(token);
    if (token.token[1] === "admin") {
      navigate("/");
    } else if (window.localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login");
        }
      })
      navigate("/Login");
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