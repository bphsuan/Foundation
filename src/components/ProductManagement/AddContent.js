import React from "react"
import './ProductManagement.scss'
import { connect } from "react-redux";
import { navigateTo } from 'gatsby'
class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      P_Brand: "",
      P_Pic: null,
      P_Name: "",
      P_Color: "",
      P_description: "",
      P_Ticket: "",
      P_OPrice: ""
    }
  }
  changeItem = (e) => {
    switch (e.target.id) {
      case "Brand":
        this.setState({
          P_Brand: e.target.value
        })
        break;
      case "Picture":
        this.setState({
          P_Pic: e.target.files[0]
        })
        break;
      case "Name":
        this.setState({
          P_Name: e.target.value
        })
        break;
      case "OPrice":
        this.setState({
          P_OPrice: e.target.value
        })
        break;
      case "Color":
        this.setState({
          P_Color: e.target.value
        })
        break;
      case "Ticket":
        this.setState({
          P_Ticket: e.target.value
        })
        break;
      case "Descrpition":
        this.setState({
          P_description: e.target.value
        })
        break;
    }
  }
  addProduct = () => {
    //Brand,Name,Color,Ticket,Info,Original_price,圖片
    const product = {
      Brand: this.state.P_Brand,
      Name: this.state.P_Name,
      Color: this.state.P_Color,
      Ticket: this.state.P_Ticket,
      Info: this.state.P_description,
      Original_price: this.state.P_OPrice,
      Pic: this.state.P_Pic,
    }
    console.log(this.props.dispatch);
    this.props.dispatch({
      type: "product/Add_product",
      payload: product,
      callback: resMsg => {
        console.log(resMsg);
        if (resMsg === "新增成功") {
          alert(resMsg);
        } else {
          alert(resMsg);
        }
      }
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "user") {
      navigateTo("/");
    } else if (this.props.isLogin === "guest" || this.props.isLogin === "") {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="addProduct">
        <h2>新增產品</h2>
        <div className="addContent">
          <div className="input">
            <span>品牌</span><input id="Brand" type="text" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>上傳照片</span><input id="Picture" type="file" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>品名</span><input id="Name" type="text" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>原始價格</span><input id="OPrice" type="text" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>色號</span><input id="Color" type="text" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>色票</span><input id="Ticket" type="text" onChange={this.changeItem} />
          </div>
          <div className="input">
            <span>描述</span><textarea id="Descrpition" onChange={this.changeItem} />
          </div>
          <div className="summit-btn">
            <a onClick={this.addProduct}>新增</a>
          </div>
        </div>
      </div>
    )
  }
} export default connect()(AddContent);