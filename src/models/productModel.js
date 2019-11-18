import { addProduct, getProductsDesc, getProductsDescByAcc, getProductsAsc, getProductsAscByAcc, searchProducts, searchProductsByAcc, getAdminProduct, addFavotie, cancelFavotie, getProductsHot3, getProductsHot, getProductsHotByAcc, getProductsHot3ByAcc } from '../services/productService'
export default {
  namespace: "product",
  state: {

  },
  reducers: {

  },
  effects: {
    * Add_product({ payload, callback }, { call }) {
      const resMsg = yield call(addProduct, payload);
      callback(resMsg);
    },
    * Get_productsDesc({ callback }, { call }) {
      const resMsg = yield call(getProductsDesc);
      callback(resMsg);
    },
    * Get_productsDescByAcc({ callback }, { call }) {
      const resMsg = yield call(getProductsDescByAcc);
      callback(resMsg);
    },
    * Get_productsAsc({ callback }, { call }) {
      const resMsg = yield call(getProductsAsc);
      callback(resMsg);
    },
    * Get_productsAscByAcc({ callback }, { call }) {
      const resMsg = yield call(getProductsAscByAcc);
      callback(resMsg);
    },
    * Search_products({ payload, callback }, { call }) {
      const resMsg = yield call(searchProducts, payload);
      callback(resMsg);
    },
    * Search_productsByAcc({ payload, callback }, { call }) {
      const resMsg = yield call(searchProductsByAcc, payload);
      callback(resMsg);
    },
    * AdminGet_product({ callback }, { call }) {
      const resMsg = yield call(getAdminProduct);
      callback(resMsg);
    },
    * Add_favorite({ payload, callback }, { call }) {
      const resMsg = yield call(addFavotie, payload);
      callback(resMsg);
    },
    * Cancel_favorite({ payload, callback }, { call }) {
      const resMsg = yield call(cancelFavotie, payload);
      callback(resMsg);
    },
    * Get_productsHot3({ callback }, { call }) {
      const resMsg = yield call(getProductsHot3);
      callback(resMsg);
    },
    * Get_productsHot3ByAcc({ callback }, { call }) {
      const resMsg = yield call(getProductsHot3ByAcc);
      callback(resMsg);
    },
    * Get_productsHot({ callback }, { call }) {
      const resMsg = yield call(getProductsHot);
      callback(resMsg);
    },
    * Get_productsHotByAcc({ callback }, { call }) {
      const resMsg = yield call(getProductsHotByAcc);
      callback(resMsg);
    },
  }
}