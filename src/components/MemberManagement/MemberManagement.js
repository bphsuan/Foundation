import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../MemberManagement/MemberManagement.scss';

class MemberManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterAsc: true,
      filterDesc: false
    }
  }
  filterAsc() {
    this.setState({
      filterAsc: true,
      filterDesc: false
    })
  }
  filterDesc() {
    this.setState({
      filterAsc: false,
      filterDesc: true
    })
  }
  render() {
    return (
      <div className="Member-header">
        <div className="Member-search">
          <input type="text" placeholder="請輸入關鍵字" />
          <span>
            <FontAwesomeIcon
              icon={faSearch}
            />
          </span>
        </div>
        <div className="Member-timeList">
          <a
            onClick={this.filterAsc.bind(this)}
            className={this.state.filterAsc ? "active" : ""}
          >
            加入時間早至晚
          </a>
          <a
            onClick={this.filterDesc.bind(this)}
            className={this.state.filterDesc ? "active" : ""}
          >
            加入時間晚至早
          </a>
        </div>
      </div>
    )
  }
}

export default MemberManagement;