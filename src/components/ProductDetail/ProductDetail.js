import React from "react"
import { Link } from "gatsby"
import "./ProductDetail.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
import { navigate } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  addCart = () => {
    const id = this.props.Product.Product_Id;
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      alert("您尚未登入!");
      navigate("/Login");
    } else if (permission.token[1] === "user") {
      console.log(id);
      this.props.dispatch({
        type: "cart/Add_Cart",
        payload: id,
        callback: response => {
          if (response.Message === "發生錯誤。") {
            alert("連線逾時，請重新登入");
            this.props.dispatch({
              type: "member/logout",
            })
            navigate("/Login");
          } else {
            console.log(response);
            alert(response);
          }
        }
      })
    }
  }
  addFavorite = () => {
    const id = this.props.Product.Product_Id
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      alert("您尚未登入!");
      navigate("/Login");
    } else if (permission.token[1] === "user") {
      this.props.dispatch({
        type: "product/Add_favorite",
        payload: id,
        callback: response => {
          if (response.Message === "發生錯誤。") {
            alert("連線逾時，請重新登入");
            this.props.dispatch({
              type: "member/logout",
            })
            navigate("/Login");
          } else {
            alert(response);
            window.location.reload();
          }
        }
      })
    }
  }
  cancelFavorite = () => {
    const id = this.Product.Product_Id
    this.props.dispatch({
      type: "product/Cancel_favorite",
      payload: id,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          alert(response);
          window.location.reload();
        }
      }
    })
  }
  render() {
    const colorMain = {
      color: "#FF5151"
    }
    const colorGray = {
      color: "#555"
    }
    return (
      <div className="detail-content">
        <Link to="/Products">
          <FontAwesomeIcon icon={faArrowLeft} /> 回到產品介紹
          </Link>
        <div className="detail">
          <div className="detail-img">
            <img src={PicServer + this.props.Product.Url} />
          </div>
          <div className="detail-text">
            <p className="brand">{this.props.Product.Brand}</p>
            <p className="name">{this.props.Product.Name}</p>
            <p className="new-price">
              <span className="price">
                {this.props.Product.Cheapest_price}
              </span>
              {this.props.Product.Original_price}
            </p>
            <p className="description">{this.props.Product.Info}</p>
            <br />
            {/* <FontAwesomeIcon
              icon={faHeart}
              className="favorite"
              style={this.props.Product.isFavorite ? colorMain : colorGray}
              onClick={this.props.Product.isFavorite ? this.cancelFavorite : this.addFavorite}
            /> */}
            <button onClick={this.addCart}>
              <FontAwesomeIcon
                icon={faCartPlus}
                className="addCart"
              />
              加入購物車
             </button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(ProductDetail)
