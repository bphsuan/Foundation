import { addCart, getCart, deleteCart, sendCart, removeCart } from '../services/cartService';
export default {
  namespace: "cart",
  state: {

  },
  reducers: {

  },
  effects: {
    * Add_Cart({ payload, callback }, { call }) {
      const resMsg = yield call(addCart, payload);
      callback(resMsg);
    },
    * GET_Cart({ callback }, { call }) {
      const resMsg = yield call(getCart);
      callback(resMsg);
    },
    * Delete_Cart({ payload, callback }, { call }) {
      const resMsg = yield call(deleteCart, payload);
      callback(resMsg);
    },
    * Send_Cart({ payload, coupon, callback }, { call }) {
      const resMsg = yield call(sendCart, payload, coupon);
      callback(resMsg);
    },
    * Remove_Cart({ callback }, { call }) {
      const resMsg = yield call(removeCart);
      callback(resMsg);
    },
  }
}