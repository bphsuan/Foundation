import { uploadDetectionPic, getDetectHistory, doDetectPic } from "../services/faceService"

export default {
  namespace: "face",
  state: {},
  reducers: {},
  effects: {
    *uploadUserPic({ payload, callback }, { call }) {
      const resMsg = yield call(uploadDetectionPic, payload)
      console.log("進入上傳Model", resMsg)
      callback(resMsg)
    },
    *doDetectPic({ payload, callback }, { call }) {
      const resMsg = yield call(doDetectPic, payload)
      console.log("進入檢測Model", resMsg)
      callback(resMsg)
    },
    *getDetectHistory({ payload, callback }, { call }) {
      const resMsg = yield call(getDetectHistory)
      callback(resMsg)
    },
  },
}
