import { brandHistoryChart, memberGenderChart } from '../services/chartService';
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
  }
}