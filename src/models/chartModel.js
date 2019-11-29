import { brandHistoryChart, memberGenderChart, memberAge, buyFrequencyChart, buyBrandChart } from '../services/chartService';
export default {
  namespace: "chart",
  state: {

  },
  reducers: {

  },
  effects: {
    * Get_brandHistory({ payload, callback }, { call }) {
      const resMsg = yield call(brandHistoryChart);
      callback(resMsg);
    },
    * Get_memberGender({ payload, callback }, { call }) {
      const resMsg = yield call(memberGenderChart);
      callback(resMsg);
    },
    * Get_memberAge({ payload, callback }, { call }) {
      const resMsg = yield call(memberAge);
      callback(resMsg);
    },
    * Get_buyFrequency({ payload, callback }, { call }) {
      const resMsg = yield call(buyFrequencyChart);
      callback(resMsg);
    },
    * Get_buyBrand({ payload, callback }, { call }) {
      const resMsg = yield call(buyBrandChart);
      callback(resMsg);
    },
  }
}