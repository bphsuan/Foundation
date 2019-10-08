import React from 'react';
import { connect } from 'react-redux';
import { navigateTo } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../ProductHeader/ProductHeader.scss';

class ProductHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
      favorite: false,
    }
  }
  priceAsc() {
    this.setState({
      priceAsc: true,
      priceDesc: false,
      hotSale: false,
      favorite: false,
    })
  }
  priceDesc() {
    this.setState({
      priceAsc: false,
      priceDesc: true,
      hotSale: false,
      favorite: false,
    })
  }
  hotSale() {
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSale: true,
      favorite: false,
    })
  }
  favorite() {
    this.setState({
      priceAsc: false,
      priceDesc: false,
      hotSale: false,
      favorite: true,
    })
  }
  render() {
    return (
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
          <a
            onClick={this.favorite.bind(this)}
            className={this.state.favorite ? "active" : ""}
          >我的最愛
          </a>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLogin: state.member.isLogin,
    memberAccount: state.member.memberAccount
  };
}

export default connect(mapStateToProps)(ProductHeader);