import React from 'react';
import './AboutTeam.scss';
import jack from '../../images/jack.png';
import sherry from '../../images/sherry.jpg';
import monkey from '../../images/monkey.jpg';
import tiffany from '../../images/tiffany.jpg';
import jychen from '../../images/jychen.jpg';
import Title from '../Title/Title';

class AboutTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "關於團隊 Our Team"
    }
  }
  render() {
    return (
      <div className="team-descirption">
        <Title
          name={this.state.name}
        />
        <div className="descirption">
          <div className="team-content">
            <p>化妝品產業的蓬勃發展，讓使用者在選購時有更多元的選擇，本團隊深入了解使用者對化妝品的需求並實作出「紅粉知己Find Your Foundation」，而本系統貢獻如下：</p>
            <p>1.	膚色辨識粉底液推薦：透過基於Python語言使用Open CV並搭配dlib Machine learning函式庫實作膚色影像辨識檢測，進而推薦適合的粉底液產品，讓使用者無需浪費挑選色號的選擇成本。</p>
            <p>2. 貨比不只三家：採用 Python 語言實作網路爬蟲技術進行網頁數據抓取，分析各大網路商城同項產品價格比價，立即找出最便宜的商品供使用者選擇。</p>
            <p>3.	多元數據統計：透過使用者膚色檢測紀錄、購買歷史紀錄等數據追蹤，進而統計出大眾熱銷產品與個人消費習慣資訊。</p>
            <p>4.	個人化行銷：根據使用者購買紀錄，分析出使用者平均購買乙次的頻率，在其下次購買時間接近時，系統將主動寄送優惠券，達到顧客忠誠度的目的。</p>

          </div>
          <div className="team-title">
            <div className="title-style">
              <p className="left-style">研究</p>
              <p className="right-style title-color">成果</p>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="member-box middle">
            <div className="title-style">
              <p className="right-style">團隊</p>
              <p className="left-style title-color">介紹</p>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={jack} className="member-pic" />
            <div className="member-content">
              <p className="member-name">姜琇森</p>
              <span className="work-item">指導老師</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={sherry} className="member-pic" />
            <div className="member-content">
              <p className="member-name">兵珮瑄</p>
              <span className="work-item">App開發</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={monkey} className="member-pic" />
            <div className="member-content">
              <p className="member-name">呂欣盈</p>
              <span className="work-item">後端開發</span>
              <span className="work-item">資料庫管理</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={tiffany} className="member-pic" />
            <div className="member-content">
              <p className="member-name">林庭蓁</p>
              <span className="work-item">網頁開發</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={jychen} className="member-pic" />
            <div className="member-content">
              <p className="member-name">陳璟誼</p>
              <span className="work-item">網頁設計</span>
              <span className="work-item">網頁開發</span>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default AboutTeam