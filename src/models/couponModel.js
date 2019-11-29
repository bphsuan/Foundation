import { getCoupon, } from '../services/couponSerice';
export default {
  namespace: "coupon",
  state: {

  },
  reducers: {

  },
  effects: {
    * Get_coupon({ callback }, { call }) {
      const resMsg = yield call(getCoupon); //return status
      console.log(resMsg);
      callback(resMsg)
    },
  }
}