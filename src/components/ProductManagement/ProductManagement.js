import React from "react"
import './ProductManagement.scss'
import { Link } from 'gatsby';
import DialogBox from './DialogBox';
import ManageList from './ManageList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import { navigateTo } from 'gatsby';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: '',
      open: false,
      products: []
    }
  }
  setEdditButton = () => {
    this.setState({
      button: 'edit',
      open: true
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
  setEdditButton = () => {
    this.setState({
      button: 'edit',
      open: true
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
  handleClose = () => {
    this.setState({
      open: false
    })
  }

  componentDidMount() {
    this.GetProducts();
  }
  GetProducts = () => {
    this.props.dispatch({
      type: "product/AdminGet_product",
      callback: response => {
        this.setState({
          products: response
        })
        console.log(this.state.products);
      }
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "user") {
      navigateTo("/");
    } else if (localStorage.length === 0) {
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="product-management">
        <div className="top-tool">
          <Link to="/addProduct" className="p-button square-size" onClick={this.setAddButton} ><FontAwesomeIcon icon={faPlus} /></Link>
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
              <th>最近一次修改時間</th>
              <th>修改</th>
              <th>刪除</th>
            </tr>
            {this.state.products.map((product, i) => {
              return (
                <ManageList
                  key={i}
                  Id={product.Product_Id}
                  Brand={product.Brand}
                  Name={product.Name}
                  Color={product.Color}
                  Ticket={product.Ticket}
                  Info={product.Info}

                />
              )
            })
            }
          </tbody>
        </table>
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
