import { addProduct, getProductsDesc, getProductsDescByAcc, getProductsAsc, getProductsAscByAcc, getAdminProduct, addFavotie, cancelFavotie } from '../services/productService'
export default {
  namespace: "product",
  state: {

  },
  reducers: {

  },
  effects: {
    * Add_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(addProduct, payload);
      callback(resMsg);
    },
    * Get_productsDesc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getProductsDesc);
      callback(resMsg);
    },
    * Get_productsDescByAcc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getProductsDescByAcc);
      callback(resMsg);
    },
    * Get_productsAsc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getProductsAsc);
      callback(resMsg);
    },
    * Get_productsAscByAcc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getProductsAscByAcc);
      callback(resMsg);
    },
    * AdminGet_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getAdminProduct);
      callback(resMsg);
    },
    * Add_favorite({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(addFavotie, payload);
      callback(resMsg);
    },
    * Cancel_favorite({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(cancelFavotie, payload);
      callback(resMsg);
    },
  }
}