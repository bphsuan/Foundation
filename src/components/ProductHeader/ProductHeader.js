import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../ProductHeader/ProductHeader.scss';

class ProductHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
        </div>
      </div>
    )
  }
}

export default ProductHeader;