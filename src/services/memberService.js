const registerAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Register";
const loginAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Login";
const logoutAPI = "foundation.hsc.nutc.edu.tw/api/Customer/Logout";

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
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      Account: data.Account,
      Password: data.Password,
    })
  }).then(responese => responese.json())
}
export {
  register, login
}

