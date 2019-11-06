import React from 'react';
import Product from './ShoppingItem';
import './ShoppingCart.scss';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    if (this.props.isLogin === "admin") {
      navigateTo("/");
    } else if (this.props.isLogin === "guest") {
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
        {this.props.products.map((product) => {
          return (
            <Product
              id={product.id}
              img={product.img}
              brand={product.brand}
              name={product.name}
              new_price={product.new_price}
            />
          )
        })}
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