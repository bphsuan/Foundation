const registerAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Register";
const loginAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Login";
<<<<<<< HEAD
const logoutAPI = "foundation.hsc.nutc.edu.tw/api/Customer/Logout";
const modifyPswAPI = "foundation.hsc.nutc.edu.tw/api/Customer/ModifyPassword"
=======

>>>>>>> e009500526f26cfc6f2e15bd6dd5b7a75220a2c9
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
  }).then(responese => responese.json())
}
function login(data) {
  console.log(data)
  return fetch(loginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials":true,
      "Access-Control-Allow-Origin": "*",
      "Accept":"application/json"
    },
    credentials: "same-origin",

    body: JSON.stringify({
      Account: data.Account,
      Password: data.Password,
    })
  }).then(responese => {
    // console.log(responese.headers)
    responese.json()
  }
  )
}
function modifyPsw(data) {
  console.log(data)
  return fetch(modifyPswAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    })
  }).then(responese => responese.json())
}
// function login(data) {
//   console.log(data)
//   return fetch(loginAPI, {
//     headers: {
//       'Accept': 'application/json',
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": true,

//     },
//     method: "POST",
//     credentials: "same-origin",
//     body: JSON.stringify({
//       Account: data.Account,
//       Password: data.Password,
//     })
//   }).then(responese => responese)
// }
export {
  register, login, modifyPsw
}

