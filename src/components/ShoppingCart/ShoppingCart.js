import React from 'react';
import Product from './ShoppingItem';
import StepNext from '../StepNext/StepNext';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "結帳 ",
      products: [],

    }
  }
  componentDidMount() {
    this.GET_Cart();
  }
  GET_Cart = () => {
    this.props.dispatch({
      type: "cart/GET_Cart",
      callback: response => {
        this.setState({
          products: response
        })
        console.log(this.state.products);
        const products_local = [];
        response.forEach(product => {
          const data = { "id": product.Product_Id, "quantity": 1 }
          products_local.push(data)
        })
        localStorage.setItem("product", JSON.stringify(products_local));
      }
    })
  }
  render() {
    const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
      token: []
    };
    localStorage.getItem(token);
    if (token.token[1] === "admin") {
      console.log(this.props.isLogin);
      navigateTo("/");
    } else if (localStorage.length === 0) {
      console.log(this.props.isLogin);
      this.props.dispatch({
        type: "member/logout",
        callback: () => {
          navigateTo("/Login");
        }
      })
      navigateTo("/Login");
    }
    return (
      <div className="product-content">
        {this.state.products.map((product, i) => {
          return (
            <Product
              key={i}
              id={product.Product_Id}
              img={product.Url}
              brand={product.Brand}
              name={product.Name}
              new_price={product.Cheapest_price}
            />
          )
        })}

        <Link to="/Checkout">
          <StepNext
            next={this.state.next}
            icon={faDollarSign}
          />
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
  };
}

export default connect(mapStateToProps)(ShoppingCart);
