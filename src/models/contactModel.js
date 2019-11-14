import { sendContact, } from '../services/contactService';
export default {
  namespace: "contact",
  state: {

  },
  reducers: {

  },
  effects: {
    * sendContact({ payload, callback }, { put, call, select }) {
      const resMsg = yield call(sendContact, payload); //return status
      console.log(resMsg);
      callback(resMsg)
    },
  }
}