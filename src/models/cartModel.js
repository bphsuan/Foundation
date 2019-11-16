import { addCart, getCart, deleteCart, sendCart } from '../services/cartService';
export default {
  namespace: "cart",
  state: {

  },
  reducers: {

  },
  effects: {
    * Add_Cart({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(addCart, payload);
      callback(resMsg);
    },
    * GET_Cart({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getCart);
      callback(resMsg);
    },
    * Delete_Cart({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(deleteCart, payload);
      callback(resMsg);
    },
    * Send_Cart({ payload, coupon, callback }, { put, call, select }) {
      const resMsg = yield call(sendCart, payload, coupon);
      callback(resMsg);
    }
  }
}