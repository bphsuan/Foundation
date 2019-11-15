import { getAdminProduct, outProduct } from '../services/productService'
export default {
  namespace: "productAdmin",
  state: {

  },
  reducers: {

  },
  effects: {
    * AdminGet_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getAdminProduct);
      callback(resMsg);
    },
    * AdminGet_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(outProduct, payload);
      callback(resMsg);
    },
  }
}