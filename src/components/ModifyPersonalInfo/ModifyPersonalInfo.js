import React from 'react';
import './ModifyPersonalInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModifyPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="modify-form" >
        <div className="input-style">
          <p className="letter">姓名</p>
          <input type="text" className="input" />
        </div>
        <div className="input-style">
          <p className="letter">性別</p>
          <select className="input">
            <option>女</option>
            <option>男</option>
          </select>
        </div>
        <div className="input-style">
          <p className="letter">生日</p>
          <input type="date" className="input" />
        </div>
        <div className="input-style">
          <p className="letter">email</p>
          <input type="email" className="input" />
        </div>
        <div className="input-style">
          <p className="letter">電話</p>
          <input type="tel" className="input" />
        </div>
        <div className="input-style">
          <p className="letter">地址</p>
          <input type="text" className="input" />
        </div>
        <div className="modify-btn">
          <a href="">儲存</a>
        </div>
      </div>
    )
  }
}

export default ModifyPersonalInfo