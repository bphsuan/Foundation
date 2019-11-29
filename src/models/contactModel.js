import { sendContact, getContact } from '../services/contactService';
export default {
  namespace: "contact",
  state: {

  },
  reducers: {

  },
  effects: {
    * sendContact({ payload, callback }, { call }) {
      const resMsg = yield call(sendContact, payload); //return status
      callback(resMsg)
    },
    * getContact({ callback }, { call }) {
      const resMsg = yield call(getContact); //return status
      callback(resMsg)
    },
  }
}