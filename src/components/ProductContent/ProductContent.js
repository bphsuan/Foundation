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
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
    }
  }
  componentDidMount() {
    window.location.hash = "#Desc";
    this.getProductDesc();
  }
  priceAsc() {
    this.setState({
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
    }, () => { this.onChangeFilter(); })
    this.getProductAsc();
  }
  priceDesc() {
    this.setState({
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
    }, () => { this.onChangeFilter(); })
    this.getProductDesc();
  }
  hotSale() {
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSale: true,
    }, () => { this.onChangeFilter(); })
  }
  onChangeFilter = () => {
    if (this.state.priceAsc === true) {
      window.location.hash = "#Asc";
    } else if (this.state.priceDesc === true) {
      window.location.hash = "#Desc";
    } else if (this.state.hotSale === true) {
      window.location.hash = "#HotSell"
    }
  }
  getProductDesc = () => {
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
            navigateTo("/Login");
          } else {
            this.setState({
              products: response
            })
          }
        }
      })
    } else if (permission.token[1] === "admin") {
      navigateTo("/");
    }
  }
  getProductAsc = () => {
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      this.props.dispatch({
        type: "product/Get_productsAsc",
        callback: response => {
          this.setState({
            products: response
          })
        }
      })
    } else if (permission.token[1] === "user") {
      this.props.dispatch({
        type: "product/Get_productsAscByAcc",
        callback: response => {
          if (response.Message === "發生錯誤。") {
            alert("連線逾時，請重新登入");
            this.props.dispatch({
              type: "member/logout",
            })
            navigateTo("/Login");
          } else {
            this.setState({
              products: response
            })
          }
        }
      })
    } else if (permission.token[1] === "admin") {
      navigateTo("/");
    }
  }
  getProductAfterAction = () => {
    const hash = window.location.hash;
    if (hash === "#Desc") {
      this.getProductDesc();
    } else if (hash === "#Asc") {
      this.getProductAsc();
    }
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
              onClick={this.priceDesc.bind(this)}
              className={this.state.priceDesc ? "active" : ""}
            >價錢高至低
          </a>
            <a
              onClick={this.priceAsc.bind(this)}
              className={this.state.priceAsc ? "active" : ""}
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
                favorite={product.isFavorite}
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