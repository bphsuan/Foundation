import { getAdminProduct, outProduct, cancelOutProduct, deleteProduct, getProductsDescForAdmin, getProductsForAdmin, getProductsHotForAdmin } from '../services/productService'
export default {
  namespace: "productAdmin",
  state: {

  },
  reducers: {

  },
  effects: {
    * AdminGet_product({ callback }, { call }) {
      const resMsg = yield call(getAdminProduct);
      callback(resMsg);
    },
    * AdminOut_product({ payload, callback }, { call }) {
      const resMsg = yield call(outProduct, payload);
      callback(resMsg);
    },
    * AdminCancelOut_product({ payload, callback }, { call }) {
      const resMsg = yield call(cancelOutProduct, payload);
      callback(resMsg);
    },
    * AdminDelete_product({ payload, callback }, { call }) {
      const resMsg = yield call(deleteProduct, payload);
      callback(resMsg);
    },
    * Get_ProductsDescForAdmin({ callback }, { call }) {
      const resMsg = yield call(getProductsDescForAdmin);
      callback(resMsg);
    },
    * Get_ProductsForAdmin({ callback }, { call }) {
      const resMsg = yield call(getProductsForAdmin);
      callback(resMsg);
    },
    * Get_ProductsHotForAdmin({ callback }, { call }) {
      const resMsg = yield call(getProductsHotForAdmin);
      callback(resMsg);
    },

  }
}