import React from 'react';
import Product from '../Product/Product';
import './Favorite.scss';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    this.getProductDesc();
  }
  getProductDesc = () => {
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      alert("您尚未登入!");
      navigate("/Login");
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
  render() {
    return (
      <div className="product-content">
        {this.state.products.map((product, i) => {
          if (product.isFavorite === true) {
            return (
              <Product
                key={i}
                id={product.Product_Id}
                img={PicServer + product.Url}
                brand={product.Brand}
                name={product.Name}
                favorite={product.isFavorite}
                new_price={product.Cheapest_price}
                price={product.Original_price}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default connect()(Favorite);