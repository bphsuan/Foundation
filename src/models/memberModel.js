import { register, login, modifyPsw } from '../services/memberService';

export default {
  namespace: "member",
  state: {
    memberAccount: "",
    isLogin: false
  },
  reducers: {
    SET_Login(state, { payload }) {
      console.log(payload);
      return {
        ...state, //open state
        memberAccount: payload,
        isLogin: true
      }
    },
    SET_Logout(state) {
      return {
        ...state,
        isLogin: false
      }
    }
  },
  effects: {
    * register({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(register, payload); //return status
      console.log(resMsg);
      callback(resMsg)
    },
    * login({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(login, payload); //return status
      console.log(resMsg);
      callback(resMsg);
    },
    * loginSuccess({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(login, payload); //return status
      console.log(resMsg);
      let _account = "";
      _account = payload.Account; //get account
      console.log(_account);
      yield put({
        //to reducer
        type: "SET_Login",
        payload: _account,
      });
      callback(resMsg);
    },
    * logout({ payload, callback }, { put, call, select }) {
      yield put({
        type: "SET_Logout",
      })
    },
    * modifyPsw({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(modifyPsw, payload); //return status
      console.log(resMsg);
      callback(resMsg);
    }
  },

}

