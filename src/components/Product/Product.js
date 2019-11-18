import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby'
import { connect } from "react-redux";
import { navigate } from 'gatsby';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  addCart = () => {
    const id = this.props.id;
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
  addFavorite = () => {
    const id = this.props.id
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
    const id = this.props.id
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
      color: "#EFEFEF"
    }
    return (
      <div id={this.props.id} className="product">
        <div className="product-func">
          <FontAwesomeIcon
            icon={faHeart}
            className="favorite"
            style={this.props.favorite ? colorMain : colorGray}
            onClick={this.props.favorite ? this.cancelFavorite : this.addFavorite}
          />
          <FontAwesomeIcon
            icon={faCartPlus}
            className="addCart"
            onClick={this.addCart}
          />
        </div>

        <div className="product-img">
          <Link to={`/ProductDetail/${this.props.id}`}> <img src={this.props.img} /></Link>
        </div>
        <div className="product-text">
          <p className="product-brand">{this.props.brand}</p>
          <p className="product-name">{this.props.name}</p>
          <p className="price">{this.props.price}</p>
          <p className="new-price">{this.props.new_price}</p>
        </div>
      </div>

    )
  }
}

export default connect()(Product);