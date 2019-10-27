const registerAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Register";
const loginAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Login";
const modifyPswAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/ModifyPassword";
const userInfoAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/UserInformation";
const uploadUserPicAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/UploadUserPic";
const getUserPicAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/GetUserPic";

function register(data) {
  console.log(data)
  return fetch(registerAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      Account: data.Account,
      Password: data.Password,
      Name: data.Name,
      Gender: data.Gender,
      Birthday: data.Birthday,
      Email: data.Email,
      Phone: data.Phone,
      Address: data.Address
    })
  }).then(response => response.json())
}
function login(data) {
  console.log(data)
  return fetch(loginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
    },

    body: JSON.stringify({
      Account: data.Account,
      Password: data.Password,
    })
  }).then(response => response.json())
}
function UserInfo() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  console.log(token.token[0]);
  return fetch(userInfoAPI, {
    method: "GET",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    }),
  }).then(response => response.json())

}
function SendUserInfo(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  console.log(token.token[0]);
  return fetch(userInfoAPI, {
    method: "POST",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": "Bearer " + token.token[0]
    }),
    body: JSON.stringify({
      Name: data.Name,
      Gender: data.Gender,
      Birthday: data.Birthday,
      Email: data.Email,
      Phone: data.Phone,
      Address: data.Address
    })
  }).then(response => response.json())

}
function modifyPsw(data) {
  console.log(data);
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(modifyPswAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    })
  }).then(response => response.json())
}
function uploadUserPic(Img) {
  console.log(Img);
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(uploadUserPicAPI, {
    method: "POST",
    headers: {
      //上傳圖片不需要先填content-type
      // "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + token.token[0]
    },
    body: Img
  }).then(response => response.json())
}
function getUserPic() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(getUserPicAPI, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

export {
  register, login, modifyPsw, UserInfo, SendUserInfo, uploadUserPic, getUserPic
}
