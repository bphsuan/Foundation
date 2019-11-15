import { getAdminMemberAsc, getAdminMemberDesc, searchMember, bindPermission, unbindPermission } from '../services/memberService';
export default {
  namespace: "memberAdmin",
  state: {

  },
  reducers: {

  },
  effects: {
    * Get_memberAsc({ callback }, { call }) {
      const resMsg = yield call(getAdminMemberAsc);
      callback(resMsg);
    },
    * Get_memberDesc({ callback }, { call }) {
      const resMsg = yield call(getAdminMemberDesc);
      callback(resMsg);
    },
    * searchMember({ payload, callback }, { call }) {
      const resMsg = yield call(searchMember, payload);
      callback(resMsg);
    },
    * bindPermission({ payload, callback }, { call }) {
      const resMsg = yield call(bindPermission, payload)
      callback(resMsg);
    },
    * unbindPermission({ payload, callback }, { call }) {
      const resMsg = yield call(unbindPermission, payload)
      callback(resMsg);
    },
  }
}