import { addProduct } from '../services/productService'
export default {
  namespace: "product",
  state: {

  },
  reducers: {

  },
  effects: {
    * Add_product({ payload, callback }, { put, call, select }) {
      console.log("進入model~");
      const resMsg = yield call(addProduct, payload);
      callback(resMsg);
    }
  }
}