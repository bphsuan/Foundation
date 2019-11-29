import React from 'react';
import Title from '../Title/Title';
import Product from '../Product/Product';
import './Hot.scss';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class Hot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "熱銷排行 Hot Ranking",
      products: [],
    }
  }
  componentDidMount() {
    this.getProductHot();
  }
  getProductHot = () => {
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      this.props.dispatch({
        type: "product/Get_productsHot3",
        callback: response => {
          this.setState({
            products: response
          })
        }
      })
    } else if (permission.token[1] === "user" || permission.token[1] === "admin") {
      this.props.dispatch({
        type: "product/Get_productsHot3ByAcc",
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
    }
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    const dispear = {
      display: "none",
    }
    const apear = {
      display: "block",
    }
    return (
      <div
        className="product-content"
        style={token.token[1] === "admin" ? dispear : apear}
      >
        <Title name={this.state.name} />
        {this.state.products.map((product) => {
          return (
            <Product
              key={product.Product_Id}
              id={product.Product_Id}
              img={PicServer + product.Url}
              brand={product.Brand}
              name={product.Name}
              favorite={product.isFavorite}
              new_price={product.Cheapest_price}
              price={product.Original_price}
            />
          )
        })}
      </div>
    )
  }
}

export default connect()(Hot)