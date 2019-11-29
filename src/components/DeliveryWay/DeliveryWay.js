import React from 'react';
import './DeliveryWay.scss';
import StepNext from '../StepNext/StepNext';
import StepPrevious from '../StepPrevious/StepPrevious';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';


class DeliveryWay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: " 上一步",
      next: "下一步 ",
      delivery: "",
      toHome: [],
      customerA: "",
      telA: "",
      addressA: "",
      toStore: [],
      customerB: "",
      telB: "",
      wayB: "7-11",
      locationB: "台中",
      storeB: "育才"
    }
  }
  deliveryWay = (e) => {
    localStorage.removeItem("delivery");
    this.setState({
      delivery: e.target.value,
    }, () => { //setState異步
      localStorage.setItem("delivery", JSON.stringify(this.state.delivery));
    })
  }
  customerA = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toHome: [],
      customerA: e.target.value
    }, () => {
      this.setState({
        toHome: {
          "customer": this.state.customerA,
          "tel": this.state.telA,
          "address": this.state.addressA
        }
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toHome));
      })
    })
  }
  telA = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toHome: [],
      telA: e.target.value
    }, () => {
      this.setState({
        toHome: [{
          "customer": this.state.customerA,
          "tel": this.state.telA,
          "address": this.state.addressA
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toHome));
      })
    })
  }
  addressA = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toHome: [],
      addressA: e.target.value
    }, () => {
      this.setState({
        toHome: [{
          "customer": this.state.customerA,
          "tel": this.state.telA,
          "address": this.state.addressA
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toHome));
      })
    })
  }
  customerB = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toStore: [],
      customerB: e.target.value
    }, () => {
      this.setState({
        toStore: [{
          "customer": this.state.customerB,
          "tel": this.state.telB,
          "way": this.state.wayB,
          "location": this.state.locationB,
          "store": this.state.storeB
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toStore));
      })
    })
  }
  telB = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toStore: [],
      telB: e.target.value
    }, () => {
      this.setState({
        toStore: [{
          "customer": this.state.customerB,
          "tel": this.state.telB,
          "way": this.state.wayB,
          "location": this.state.locationB,
          "store": this.state.storeB
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toStore));
      })
    })
  }
  wayB = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toStore: [],
      wayB: e.target.value
    }, () => {
      this.setState({
        toStore: [{
          "customer": this.state.customerB,
          "tel": this.state.telB,
          "way": this.state.wayB,
          "location": this.state.locationB,
          "store": this.state.storeB
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toStore));
      })
    })
  }
  locationB = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toStore: [],
      locationB: e.target.value
    }, () => {
      this.setState({
        toStore: [{
          "customer": this.state.customerB,
          "tel": this.state.telB,
          "way": this.state.wayB,
          "location": this.state.locationB,
          "store": this.state.storeB
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toStore));
      })
    })
  }
  storeB = (e) => {
    localStorage.removeItem("deliveryInfo");
    this.setState({
      toStore: [],
      storeB: e.target.value
    }, () => {
      this.setState({
        toStore: [{
          "customer": this.state.customerB,
          "tel": this.state.telB,
          "way": this.state.wayB,
          "location": this.state.locationB,
          "store": this.state.storeB
        }]
      }, () => {
        localStorage.setItem("deliveryInfo", JSON.stringify(this.state.toStore));
      })
    })
  }
  //格式錯誤檢查
  deliveryisEmpty = () => {
    if (this.state.delivery === "") {
      alert("請選擇配送方式");
    } else if (this.state.delivery === "toHome") {
      if (this.state.customerA === "") {
        alert("請輸入收件人");
      } else if (this.state.telA === "") {
        alert("請輸入聯絡電話");
      } else if (this.state.telA.length !== 10 || isNaN(this.state.telA)) {
        alert("聯絡電話格式錯誤");
      } else if (this.state.address === "") {
        alert("請輸入收件地址");
      } else {
        navigate("/Order");
      }
    } else if (this.state.delivery === "toStore") {
      if (this.state.customerB === "") {
        alert("請輸入收件人");
      } else if (this.state.telB === "") {
        alert("請輸入聯絡電話");
      } else if (this.state.telB.length !== 10 || isNaN(this.state.telB)) {
        alert("聯絡電話格式錯誤");
      }
      else {
        navigate("/Order");
      }
    } else {
      console.log("redirect");
      navigate("/Order");
    }
  }
  componentDidMount() {
    const token = (window.localStorage.getItem("token")) ? JSON.parse(window.localStorage.getItem("token")) : {
      token: []
    };
    window.localStorage.getItem(token);
    if (token.token[1] === "admin") {
      console.log(this.props.isLogin);
      navigate("/");
    } else if (window.localStorage.length === 0) {
      console.log(this.props.isLogin);
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

    const apear = {
      display: "block"
    }
    const dispear = {
      display: "none"
    }
    return (
      <div className="delivery-content">
        <div className="delivery-way">
          <p className="delivery-tit">選擇配送方式</p>
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
          <p className="delivery-tit">填寫配送資料</p>
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
              onChange={this.addressA.bind(this)}
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
            <select defaultValue="7-11" onChange={this.wayB.bind(this)}>
              <option value="7-11" onChange={this.wayB.bind(this)}>7-11</option>
              <option value="全家" onChange={this.wayB.bind(this)}>全家</option>
              <option value="ok" onChange={this.wayB.bind(this)}>OK</option>
              <option value="萊爾富" onChange={this.wayB.bind(this)}>萊爾富</option>
            </select>
            <p>選擇地區</p>
            <select defaultValue="台中" onChange={this.locationB.bind(this)}>
              <option value="台中" onChange={this.locationB.bind(this)}>台中</option>
              <option value="台北" onChange={this.locationB.bind(this)}>台北</option>
              <option value="台南" onChange={this.locationB.bind(this)}>台南</option>
            </select>
            <p>選擇分店</p>
            <select defaultValue="育才" onChange={this.storeB.bind(this)}>
              <option value="育才" onChange={this.storeB.bind(this)}>育才</option>
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

