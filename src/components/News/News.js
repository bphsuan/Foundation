import React from "react"
import { Link } from "gatsby";
import "./News.scss"
import News01 from "../../images/news01.png";
import News02 from "../../images/news02.png";
import News03 from "../../images/news03.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class News extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="news-content">
        <div className="news-block left">
          <img src={News01} />
        </div>
        <div className="news-block right">
          <div className="news-secondary">
            <p>紅粉知己</p>
            <p>為您的顏上最適和您的顏色！</p>
            <p>Find Your Foundation</p>
            <p>Color the most suitable color!</p>
            <hr />
            <img src={News02} />
            <img src={News03} />
          </div>
        </div>
      </div>
    )
  }
}

export default News;