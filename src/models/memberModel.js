import { register, login, modifyPsw, UserInfo, SendUserInfo, uploadUserPic, getUserPic } from '../services/memberService';

export default {
  namespace: "member",
  state: {
    token: "",
    isLogin: "",
    username: "",
  },
  reducers: {
    SET_Login(state, { payload }) {
      console.log(payload);
      const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
        token: []
      };
      token.token.push(payload);
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state, //open state
        token: payload,
        isLogin: "user"
      }
    },
    SET_Username(state, { payload }) {
      return {
        ...state,
        username: payload
      }
    },
    SET_Logout(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
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
      if (resMsg[0].message === "登入成功") {
        yield put({
          //to reducer
          type: "SET_Login",
          payload: resMsg[0].token,
        });
        callback(resMsg[0].message);
      } else {
        callback(resMsg[0].message);
      }
    },
    * logout({ payload, callback }, { put, call, select }) {
      yield put({
        type: "SET_Logout",
      })
    },
    * GET_userInfo({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(UserInfo);
      callback(resMsg);
    },
    * Send_userInfo({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(SendUserInfo, payload);
      callback(resMsg);
    },
    * modifyPsw({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(modifyPsw, payload); //return status
      callback(resMsg);
    },
    * uploadUserPic({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(uploadUserPic, payload);
      callback(resMsg);
    },
    * GET_UserPic({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(getUserPic, payload);
      callback(resMsg);
    }
  },

}

