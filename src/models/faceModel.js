import { uploadDetectionPic, getDetectHistory } from "../services/faceService"

export default {
  namespace: "face",
  state: {},
  reducers: {},
  effects: {
    *uploadUserPic({ payload, callback }, { call }) {
      const resMsg = yield call(uploadDetectionPic, payload)
      console.log("hi Model", resMsg)
      callback(resMsg)
    },
    *getDetectHistory({ payload, callback }, { call }) {
      const resMsg = yield call(getDetectHistory)
      callback(resMsg)
    },
  },
}
