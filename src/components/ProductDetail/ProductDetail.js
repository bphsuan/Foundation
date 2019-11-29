import React from "react";
import { Link } from "gatsby";
import "./ProductDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { navigate } from 'gatsby';

let hash = ""
const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    if (window.location.hash === "") {
      window.location.hash = JSON.parse(localStorage.getItem("product_id"));
      localStorage.removeItem("product_id");
      this.getProduct();
    } else {
      this.getProduct();
    }
    hash = window.location.hash.replace("#", "");
  }
  getProduct = () => {
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      this.props.dispatch({
        type: "product/Get_productsDesc",
        callback: response => {
          this.setState({
            products: response
          })
        }
      })
    } else if (permission.token[1] === "user") {
      this.props.dispatch({
        type: "product/Get_productsDescByAcc",
        callback: response => {
          if (response.Message === "發生錯誤。") {
            alert("連線逾時，請重新登入");
            this.props.dispatch({
              type: "member/logout",
            })
            navigate("/Login");
          } else {
            this.setState({
              products: response
            })
          }
        }
      })
    } else if (permission.token[1] === "admin") {
      navigate("/");
    }
  }
  addCart = (e) => {
    const id = e.target.id
    console.log(id);
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      alert("您尚未登入!");
      navigate("/Login");
    } else if (permission.token[1] === "user") {
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
            alert(response);
          }
        }
      })
    }
  }
  addFavorite = (e) => {
    const id = window.location.hash.replace("#", "");
    console.log(id);
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
  cancelFavorite = (e) => {
    const id = window.location.hash.replace("#", "");
    console.log(id);
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
        {this.state.products.map((product, i) => {
          if (Number(hash) === product.Product_Id) {
            return (
              <div className="detail" key={i}>
                <div className="detail-img">
                  <img src={PicServer + product.Url} />
                </div>
                <div className="detail-text">
                  <p className="brand">{product.Brand}</p>
                  <p className="name">{product.Name}</p>
                  <p className="new-price">
                    <span className="price">
                      {product.Original_price}
                    </span>
                    {product.Cheapest_price}
                  </p>
                  <p className="description">{product.Info}</p>
                  <br />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="favorite"
                    style={product.isFavorite ? colorMain : colorGray}
                    onClick={product.isFavorite ? this.cancelFavorite.bind(this) : this.addFavorite.bind(this)}
                  />
                  <button
                    id={product.Product_Id}
                    onClick={this.addCart.bind(this)}
                  >
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="addCart"
                    />
                    加入購物車
                  </button>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}
export default connect()(ProductDetail)
