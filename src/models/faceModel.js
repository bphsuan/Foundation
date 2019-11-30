import { uploadDetectionPic } from '../services/faceService';

export default {
  namespace: "face",
  state: {

  },
  reducers: {
  },
  effects: {
    * uploadUserPic({ payload, callback }, { call }) {
      const resMsg = yield call(uploadDetectionPic, payload);
      callback(resMsg);
    },
  },
}