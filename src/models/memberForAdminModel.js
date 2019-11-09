import { getAdminMemberAsc, getAdminMemberDesc } from '../services/memberService';
export default {
  namespace: "memberAdmin",
  state: {

  },
  reducers: {

  },
  effects: {
    * Get_memberAsc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getAdminMemberAsc);
      callback(resMsg);
    },
    * Get_memberDesc({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getAdminMemberDesc);
      callback(resMsg);
    }
  }
}