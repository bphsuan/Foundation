import { sendContact, } from '../services/contactService';
export default {
  namespace: "contact",
  state: {

  },
  reducers: {

  },
  effects: {
    * sendContact({ payload, callback }, { call }) {
      const resMsg = yield call(sendContact, payload); //return status
      console.log(resMsg);
      callback(resMsg)
    },
  }
}