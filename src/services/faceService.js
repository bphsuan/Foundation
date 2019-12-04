const faceServer = "http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Face/"
const detectPIC = "http://foundation.hsc.nutc.edu.tw/api/Face/"

function uploadDetectionPic(Img) {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : {
      token: [],
    }
  return fetch(detectPIC + "InsertFacePic", {
    method: "POST",
    headers: {
      //上傳圖片不需要先填content-type
      // "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "Bearer " + token.token[0],
    },
    body: Img,
  }).then(response => response.json())
}
async function doDetectionPic(Img) {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : {
      token: [],
    }
  return (await fetch(faceServer + "SkinDetection", {
    method: "POST",
    headers: {
      //上傳圖片不需要先填content-type
      // "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: "Bearer " + token.token[0],
    },
    body: Img,
  }).then(response => response.json()))
}
function getDetectHistory() {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : {
      token: [],
    }
  return fetch(faceServer + "GetFaceHistoryByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: "Bearer " + token.token[0],
    },
  }).then(response => response.json())
}
export { uploadDetectionPic, getDetectHistory, doDetectionPic }
