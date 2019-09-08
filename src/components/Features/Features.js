import React from "react"
import { Link } from "gatsby";
import "./Features.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Title from '../Title/Title';
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "三大特色 Features"
    }
  }
  render() {
    return (
      <div className="feature-content">
        <Title name={this.state.name} />
        <div className="feature">
          <div className="feature-left">
            <div className="feature-square">
              <span>1</span>
              <FontAwesomeIcon icon={faCamera} className="feature-icon" />
            </div>
          </div>
          <div className="feature-right">
            <div className="feature-description">
              <h1>影像辨識</h1>
              <p>協助您準確判斷適合您膚色的粉底液</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <div className="feature-square">
              <span>2</span>
              <FontAwesomeIcon icon={faHandHoldingUsd} className="feature-icon" />
            </div>
          </div>
          <div className="feature-right">
            <div className="feature-description">
              <h1>不用您親自貨比三家</h1>
              <p>幫您比較各大電商平台上全新商品之價格</p>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <div className="feature-square">
              <span>3</span>
              <FontAwesomeIcon icon={faThumbsUp} className="feature-icon" />
            </div>
          </div>
          <div className="feature-right">
            <div className="feature-description">
              <h1>個人化儀表板</h1>
              <p>個人化的服務給您尊榮級的享受</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News;