import React from 'react';
import Product from '../Product/Product';
import './ProductContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';

const PicServer = "http://foundation.hsc.nutc.edu.tw";
class ProductContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      priceAsc: false,
      priceDesc: true,
      hotSell: false,
      keyword: "",
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
      hotSell: false,
    }, () => { this.onChangeFilter(); })
    this.getProductAsc();
  }
  priceDesc() {
    this.setState({
      priceAsc: false,
      priceDesc: true,
      hotSell: false,
    }, () => { this.onChangeFilter(); })
    this.getProductDesc();
  }
  hotSell() {
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSell: true,
    }, () => { this.onChangeFilter(); })
    this.getProductHot();
  }
  onChangeFilter = () => {
    if (this.state.priceAsc === true) {
      window.location.hash = "#Asc";
    } else if (this.state.priceDesc === true) {
      window.location.hash = "#Desc";
    } else if (this.state.hotSell === true) {
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
  getProductHot = () => {
    const permission = JSON.parse(localStorage.getItem("token"));
    if (localStorage.length === 0) {
      this.props.dispatch({
        type: "product/Get_productsHot",
        callback: response => {
          this.setState({
            products: response
          })
        }
      })
    } else if (permission.token[1] === "user") {
      this.props.dispatch({
        type: "product/Get_productsHotByAcc",
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
  handleOnChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.searchProduct();
    }
  }
  searchProduct = () => {
    window.location.hash = "#Search";
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSell: false
    })
    const permission = JSON.parse(localStorage.getItem("token"));
    const search = this.state.keyword;
    console.log(search);
    if (localStorage.length === 0) {
      this.props.dispatch({
        type: "product/Search_products",
        payload: search,
        callback: response => {
          console.log(response);
          this.setState({
            products: response
          })
        }
      })
    } else if (permission.token[1] === "user") {
      this.props.dispatch({
        type: "product/Search_productsByAcc",
        payload: search,
        callback: response => {
          if (response.Message === "發生錯誤。") {
            alert("連線逾時，請重新登入");
            this.props.dispatch({
              type: "member/logout",
            })
            navigate("/Login");
          } else {
            console.log(response);
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
      <div>
        <div className="product-header">
          <div className="product-search">
            <input
              type="text"
              placeholder="請輸入品牌或名稱關鍵字"
              onChange={this.handleOnChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
            />
            <span>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={this.searchProduct.bind(this)}
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
              onClick={this.hotSell.bind(this)}
              className={this.state.hotSell ? "active" : ""}
            >熱銷排行
          </a>
          </div>
        </div>
        <div className="product-content">
          {this.state.products.map((product, i) => {
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
          })}
        </div>
      </div>
    )
  }
}

export default connect()(ProductContent);