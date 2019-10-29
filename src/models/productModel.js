import { addProduct } from '../services/productService'
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
    }
  }
}