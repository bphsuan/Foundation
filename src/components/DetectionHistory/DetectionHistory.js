import React from "react"
import './DetectionHistory.scss';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
const PicServer = "http://foundation.hsc.nutc.edu.tw";
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
    this.getDetectHistory();
  }
  getDetectHistory = () => {
    this.props.dispatch({
      type: "face/getDetectHistory",
      callback: (response) => {
        this.setState({
          detect: response
        })
        console.log(this.state.detect);
      }
    })
  }
  render() {
    const style = {

    }
    return (
      <div className="detect-content">
        {this.state.detect.map((detect, i) => {
          // let buyTime = detect.detectTime.split("T", 1)[0]
          return (
            <div
              key={i}
              id={detect.id}
              className="detect"
            >
              <div className="detect-text">
                <p>我的色號</p>
                <div className="detect-color" style={{ height: '20px', backgroundColor: detect.FaceColor, }}></div>
                <p className="detect-">推薦之產品</p>
                <p className="detect-product">{detect.Brand + detect.Name}</p>
                <div className="detect-img">
                  <img src={PicServer + detect.ProductUrl} />
                </div>
                <p className="time">2018-10-10</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
} export default connect()(DetectionHistory);