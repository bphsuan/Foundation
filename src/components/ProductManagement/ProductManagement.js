import React from "react"
import './ProductManagement.scss'
import { Link } from 'gatsby';
import DialogBox from './DialogBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { navigate } from 'gatsby';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: '',
      open: false,
      products: [],
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
    }
  }
  componentDidMount() {
    this.GetProducts();
  }
  priceAsc() {
    this.setState({
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
    }, () => { this.onChangeFilter(); })
  }
  priceDesc() {
    this.setState({
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
    }, () => { this.onChangeFilter(); })
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
  setDeleteButton = () => {
    this.setState({
      button: 'delete',
      open: true
    })
  }
  setAddButton = () => {
    this.setState({
      button: 'add',
      open: true
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  GetProducts = () => {
    this.props.dispatch({
      type: "productAdmin/AdminGet_product",
      callback: response => {
        this.setState({
          products: response
        })
        console.log(this.state.products);
      }
    })
  }
  // outFromCurrentProductList = (e) => {

  // }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "user") {
      navigate("/");
    } else if (localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigate("/Login");
        }
      })
      navigate("/Login");
    }
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
        <div className="product-management">
          <div className="top-tool">
            <Link to="/addProduct" className="p-button square-size" onClick={this.setAddButton.bind(this)} ><FontAwesomeIcon icon={faPlus} /></Link>
          </div>
          <table className="product-data">
            <tbody>
              <tr>
                <th>序號</th>
                <th>品牌</th>
                <th>品名</th>
                <th>色票</th>
                <th>色號</th>
                <th className="t-width">描述</th>
                <th>目前價格</th>
                <th>下架</th>
                <th>刪除</th>
              </tr>
              {this.state.products.map((product, i) => {
                return (
                  <tr id={product.Product_Id}>
                    <td>{i + 1}</td>
                    <td>{product.Brand}</td>
                    <td>{product.Name}</td>
                    <td>{product.Color}</td>
                    <td>{product.Ticket}</td>
                    <td>{product.Info}</td>
                    <td>{product.Cheapest_price}</td>
                    <td>
                      <a
                        id={product.Product_Id}
                        className="p-button b-size"
                      // onClick={this.outFromCurrentProductList.bind(this)}
                      >下架
                    </a>
                    </td>
                    <td>
                      <a
                        className="p-button b-size"
                        onClick={this.setDeleteButton}
                      >刪除
                    </a>
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(ProductManagement);
