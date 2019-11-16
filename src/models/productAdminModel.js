import { getAdminProduct, outProduct, cancelOutProduct, deleteProduct } from '../services/productService'
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

  }
}