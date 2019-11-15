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
      const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
        token: []
      };
      token.token.push(payload[0].token);
      localStorage.setItem("token", JSON.stringify(token));
      if (payload[0].IsAdmin === 1) {
        token.token.push("admin");
      } else {
        token.token.push("user");
      }
      localStorage.setItem("token", JSON.stringify(token));
      if (payload[0].IsAdmin === 1) {
        return {
          ...state, //open state
          token: payload[0].token,
          isLogin: "admin"
        }
      } else {
        return {
          ...state, //open state
          token: payload[0].token,
          isLogin: "user"
        }
      }
    },
    SET_Username(state, { payload }) {
      return {
        ...state,
        username: payload
      }
    },
    SET_LoginState(state, { }) {
      const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
        token: []
      };
      localStorage.getItem(token);
      return {
        ...state,
        token: token.token[0],
        isLogin: token.token[1]
      }
    },
    SET_Logout(state) {
      localStorage.clear();
      return {
        ...state,
        token: "",
        isLogin: "guest"
      }
    }
  },
  effects: {
    * register({ payload, callback }, { call }) {
      const resMsg = yield call(register, payload); //return status
      callback(resMsg)
    },
    * login({ payload, callback }, { put, call }) {
      const resMsg = yield call(login, payload); //return status
      if (resMsg[0].message === "登入成功") {
        yield put({
          //to reducer
          type: "SET_Login",
          payload: resMsg,
        });
        callback(resMsg[0].message);
      } else {
        callback(resMsg[0].message);
      }
    },
    * logout({ }, { put }) {
      yield put({
        type: "SET_Logout",
      })
    },
    * GET_userInfo({ callback }, { put, call }) {
      const resMsg = yield call(UserInfo);
      callback(resMsg);
      let _username = resMsg.Name;
      yield put({
        type: "SET_Username",
        payload: _username
      })
    },
    * Send_userInfo({ payload, callback }, { call }) {
      const resMsg = yield call(SendUserInfo, payload);
      callback(resMsg);
    },
    * Maintain_loginState({ }, { put }) {
      yield put({
        type: "SET_LoginState"
      })
    },
    * modifyPsw({ payload, callback }, { call }) {
      const resMsg = yield call(modifyPsw, payload); //return status
      callback(resMsg);
    },
    * uploadUserPic({ payload, callback }, { call }) {
      const resMsg = yield call(uploadUserPic, payload);
      callback(resMsg);
    },
    * GET_UserPic({ payload, callback }, { call }) {
      const resMsg = yield call(getUserPic, payload);
      callback(resMsg);
    }
  },

}

