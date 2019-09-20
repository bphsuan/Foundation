import React from 'react';
import './AboutTeam.scss';
import picture from '../../images/pic01.png';
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containingLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          </div>
          <div className="team-title">
            <div className="title-style">
              <p className="left-style">團隊</p>
              <p className="right-style title-color">理念</p>
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
            <img src={picture} className="member-pic" />
            <div className="member-content">
              <p className="member-name">姜琇森</p>
              <span className="work-item">指導老師</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={picture} className="member-pic" />
            <div className="member-content">
              <p className="member-name">兵珮瑄</p>
              <span className="work-item">App開發</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={picture} className="member-pic" />
            <div className="member-content">
              <p className="member-name">呂欣盈</p>
              <span className="work-item">後端開發</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={picture} className="member-pic" />
            <div className="member-content">
              <p className="member-name">林庭蓁</p>
              <span className="work-item">網頁開發</span>
            </div>
          </div>
          <div className="member-box shadow">
            <img src={picture} className="member-pic" />
            <div className="member-content">
              <p className="member-name">陳璟誼</p>
              <span className="work-item">網頁設計</span>
              <span className="work-item">網頁開發</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutTeam