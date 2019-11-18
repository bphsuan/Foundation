import React from "react"
import './ProductManagement.scss'
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
      setOpen: false,
      open: false,
      products: [],
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
      deleteId: ""
    }
  }
  componentDidMount() {
    this.GetProducts();
  }
  handleClickOpen(e) {
    this.setState({
      setOpen: true,
      open: true,
      deleteId: e.target.id,
    })
  }
  submitOrder() {
    this.props.dispatch({
      type: "productAdmin/AdminDelete_product",
      payload: this.state.deleteId,
      callback: response => {
        console.log(response);
      }
    })
    this.setState({
      setOpen: false,
      open: false,
      deleteId: "",
    })
    window.location.reload();
  }
  handleClose() {
    this.setState({
      setOpen: false,
      open: false,
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
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
    this.getProductHot();
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
    this.props.dispatch({
      type: "productAdmin/Get_ProductsDescForAdmin",
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
  getProductAsc = () => {
    this.props.dispatch({
      type: "productAdmin/Get_ProductsForAdmin",
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
  getProductHot = () => {
    this.props.dispatch({
      type: "productAdmin/Get_ProductsHotForAdmin",
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
  outFromCurrentProductList = (e) => {
    console.log(e.target.id);
    this.props.dispatch({
      type: "productAdmin/AdminOut_product",
      payload: e.target.id,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          alert("已下架此產品");
          this.GetProducts();
        }
      }
    })
  }
  cancelOutFromCurrentProductList = (e) => {
    this.props.dispatch({
      type: "productAdmin/AdminCancelOut_product",
      payload: e.target.id,
      callback: response => {
        if (response.Message === "發生錯誤。") {
          alert("連線逾時，請重新登入");
          this.props.dispatch({
            type: "member/logout",
          })
          navigate("/Login");
        } else {
          alert("已上架此產品");
          this.GetProducts();
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
    const button = {
      margin: "0",
      padding: "0",
      fontFamily: "sans-serif, 'Microsoft JhengHei', '微軟正黑體'",
      width: "100px",
      height: "40px",
      margin: "20px auto",
      backgroundColor: "#343434",
      color: "#fff",
      fontSize: "18px",
      display: "block",
      textAlign: "center",
      lineHeight: "40px",
      transition: "all 0.5s",
      letterSpacing: "3px",
      borderRadius: "0"
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
            <Link
              to="/addProduct"
              className="p-button square-size"
              onClick={this.setAddButton.bind(this)}
              title="新增產品"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Link>
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
                  <tr key={i} id={product.Product_Id}>
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
                        onClick={
                          product.IsOut === 0
                            ? this.outFromCurrentProductList.bind(this)
                            : this.cancelOutFromCurrentProductList.bind(this)
                        }
                      >{product.IsOut === 0 ? "下架" : "上架"}
                      </a>
                    </td>
                    <td>
                      <a
                        id={product.Product_Id}
                        className="p-button b-size"
                        onClick={this.handleClickOpen.bind(this)}
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
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title" >
          <DialogTitle
            id="form-dialog-title">
            確定刪除？
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="DialogContent">
                刪除即無法復原。
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose.bind(this)}
              style={button}>
              取消
            </Button>
            <Button
              onClick={this.submitOrder.bind(this)}
              style={button}>
              送出
            </Button>
          </DialogActions>
        </Dialog>
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
