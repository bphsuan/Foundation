import { register, login } from '../services/memberService';

export default {
  namespace: 'member',
  state: {

  },
  reducers: {

  },
  effects: {
    * register({ payload, callback }, { put, call, select }) {
      yield call(register, payload);
      callback()
    }
  }
}
