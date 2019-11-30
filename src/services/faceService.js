const faceServer = "http://foundation.hsc.nutc.edu.tw/api/Face/";

async function uploadDetectionPic(Img) {
  console.log("進入service");

  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  const response = await fetch(faceServer + "SkinDetection", {
    method: "POST",
    headers: {
      //上傳圖片不需要先填content-type
      // "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: Img
  });
  // .then(response => {

  // })
  const json = response.json();
  return json;
}
function getDetectHistory() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(faceServer + "GetFaceHistoryByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
export { uploadDetectionPic, getDetectHistory }