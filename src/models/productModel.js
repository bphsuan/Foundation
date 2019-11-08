import { addProduct, getProduct, getAdminProduct } from '../services/productService'
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
    * Get_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getProduct);
      callback(resMsg);
    },
    * AdminGet_product({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getAdminProduct);
      callback(resMsg);
    }
  }
}