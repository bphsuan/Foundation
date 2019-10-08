import { register, login, modifyPsw } from '../services/memberService';

export default {
  namespace: "member",
  state: {
    memberAccount: "",
    isLogin: ""
  },
  reducers: {
    SET_Login(state, { payload }) {
      console.log(payload);
      return {
        ...state, //open state
        memberAccount: payload,
        isLogin: "user"
      }
    },
    SET_Logout(state) {
      return {
        ...state,
        isLogin: "guest"
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
      let _account = "";
      if (resMsg === "登入成功") {
        _account = payload.Account; //get account
        yield put({
          //to reducer
          type: "SET_Login",
          payload: _account,
        });
      } else {
        callback(resMsg);
      }
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

