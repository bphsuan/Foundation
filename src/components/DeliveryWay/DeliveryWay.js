import React from 'react';
import './DeliveryWay.scss';
import StepNext from '../StepNext/StepNext';
import StepPrevious from '../StepPrevious/StepPrevious';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
import { Link } from 'gatsby';


class DeliveryWay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: " 上一步",
      next: "下一步 ",
      delivery: "",
      customerA: "",
      telA: "",
      address: "",
      customerB: "",
      telB: "",
    }
  }
  deliveryWay = (e) => {
    this.setState({
      delivery: e.target.value,
    }, () => { //setState異步
      console.log(this.state.delivery);
    })
  }
  customerA = (e) => {
    this.setState({
      customerA: e.target.value
    })
  }
  telA = (e) => {
    this.setState({
      telA: e.target.value
    })
  }
  address = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  customerB = (e) => {
    this.setState({
      customerB: e.target.value
    })
  }
  telB = (e) => {
    this.setState({
      telB: e.target.value
    })
  }
  //格式錯誤檢查
  deliveryisEmpty = () => {
    if (this.state.delivery === "") {
      alert("請選擇配送方式");
    } else if (this.state.delivery === "toHome") {
      if (this.state.customerA.length === 0) {
        alert("請輸入收件人");
      } else if (this.state.telA.length === 0) {
        alert("請輸入聯絡電話");
      } else if (this.state.telA.length !== 10 || isNaN(this.state.telA)) {
        alert("聯絡電話格式錯誤");
      } else if (this.state.address.length === 0) {
        alert("請輸入收件地址");
      } else {
        navigateTo("/Order");
      }
    } else if (this.state.delivery === "toStore") {
      if (this.state.customerB.length === 0) {
        alert("請輸入收件人");
      } else if (this.state.telB.length === 0) {
        alert("請輸入聯絡電話");
      } else if (this.state.telB.length !== 10 || isNaN(this.state.telB)) {
        alert("聯絡電話格式錯誤");
      }
      else {
        navigateTo("/Order");
      }
    } else {
      console.log("redirect");
      navigateTo("/Order");
    }
  }


  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
      console.log(this.props.isLogin);
      navigateTo("/");
    } else if (localStorage.length === 0) {
      console.log(this.props.isLogin);
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    const apear = {
      display: "block"
    }
    const dispear = {
      display: "none"
    }
    return (
      <div className="delivery-content">
        <div className="delivery-way">
          <input
            type="radio"
            name="deliveryway"
            value="toHome"
            onChange={this.deliveryWay.bind(this)}
          />
          <span> 宅配到府</span>
          <br />
          <input
            type="radio"
            name="deliveryway"
            value="toStore"
            onChange={this.deliveryWay.bind(this)}
          />
          <span> 便利商店取貨</span>
        </div>
        <div className="delivery-list">
          <p
            style={this.state.delivery === "toHome" || this.state.delivery === "toStore" ? dispear : apear}>
            請先選擇配送方式
          </p>
          <div
            className="delivery-toHome"
            style={this.state.delivery === "toHome" ? apear : dispear}
          >
            <p>收件人</p>
            <input
              type="text"
              onChange={this.customerA.bind(this)}
            />
            <p>聯絡電話</p>
            <input
              type="text"
              onChange={this.telA.bind(this)}
            />
            <p>收件地址</p>
            <textarea
              onChange={this.address.bind(this)}
            />
          </div>
          <div
            className="delivery-toStore"
            style={this.state.delivery === "toStore" ? apear : dispear}
          >
            <p>收件人</p>
            <input
              type="text"
              onChange={this.customerB.bind(this)} />
            <p>聯絡電話</p>
            <input
              type="text"
              onChange={this.telB.bind(this)} />
            <p>選擇店家</p>
            <select defaultValue="7-11">
              <option value="7-11">7-11</option>
              <option value="family-mart">全家</option>
              <option value="ok">OK</option>
              <option value="hi-life">萊爾富</option>
            </select>
            <p>選擇地區</p>
            <select defaultValue="台中">
              <option value="Taichung">台中</option>
              <option value="Taipei">台北</option>
              <option value="Tainan">台南</option>
            </select>
            <p>選擇分店</p>
            <select defaultValue="育才">
              <option value="yutsai">育才</option>
            </select>
          </div>
        </div>
        <Link to="/Checkout">
          <StepPrevious
            previous={this.state.previous}
            icon={faArrowLeft}
          />
        </Link>
        <StepNext
          next={this.state.next}
          icon={faArrowRight}
          onClick={this.deliveryisEmpty}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(DeliveryWay)

