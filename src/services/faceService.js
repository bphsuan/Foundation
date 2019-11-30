const faceServer = "http://foundation.hsc.nutc.edu.tw/api/Face/";

function uploadDetectionPic(Img) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(faceServer + "SkinDetection", {
    method: "POST",
    headers: {
      //上傳圖片不需要先填content-type
      // "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + token.token[0]
    },
    body: Img
  }).then(response => response.json())
}

export { uploadDetectionPic }