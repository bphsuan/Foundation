import { getAdminMemberAsc, getAdminMemberDesc, searchMember, bindPermission, unbindPermission } from '../services/memberService';
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
    },
    * searchMember({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(searchMember, payload);
      callback(resMsg);
    },
    * bindPermission({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(bindPermission, payload)
      callback(resMsg);
    },
    * unbindPermission({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(unbindPermission, payload)
      callback(resMsg);
    },
  }
}