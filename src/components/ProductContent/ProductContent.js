import React from 'react';
import Product from '../Product/Product';
import './ProductContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
    }
  }
  componentDidMount() {
    this.getProduct();
  }
  priceAsc() {
    this.setState({
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
    })
  }
  priceDesc() {
    this.setState({
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
    })
  }
  hotSale() {
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSale: true,
    })
  }
  getProduct = () => {
    // const permission = JSON.parse(localStorage.getItem("token"));
    // if (localStorage.length === 0) {
    //   this.props.dispatch({
    //     type: "product/Get_product",
    //     callback: response => {
    //       console.log(response);
    //       this.setState({
    //         products: response
    //       })
    //     }
    //   })
    // }
    this.props.dispatch({
      type: "product/Get_product",
      callback: response => {
        if (response.Message === "發生錯誤。") {
          console.log("happen");
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigateTo("/Login");
        } else {
          console.log(response);
          this.setState({
            products: response
          })
        }
      }
    })
  }

  render() {
    return (
      <div>
        <div className="product-header">
          <div className="product-search">
            <input
              type="text"
              placeholder="請輸入關鍵字"
            />
            <span>
              <FontAwesomeIcon
                icon={faSearch}
              />
            </span>
          </div>
          <div className="product-filter">
            <a
              onClick={this.priceAsc.bind(this)}
              className={this.state.priceAsc ? "active" : ""}
            >價錢高至低
          </a>
            <a
              onClick={this.priceDesc.bind(this)}
              className={this.state.priceDesc ? "active" : ""}
            >價錢低至高
          </a>
            <a
              onClick={this.hotSale.bind(this)}
              className={this.state.hotSale ? "active" : ""}
            >熱銷排行
          </a>
          </div>
        </div>
        <div className="product-content">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.Product_Id}
                id={product.Product_Id}
                img={PicServer + product.Url}
                brand={product.Brand}
                name={product.Name}
                favorite={product.favorite}
                addFavorite={this.props.addFavorite}
                new_price={product.Cheapest_price}
                price={product.Original_price}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect()(ProductContent);