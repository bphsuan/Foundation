const memberServer = "http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Customer/";
const memberAdminService = 'http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Admin/';
const buyHistoryService = 'http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/BuyHistory/';

function register(data) {
  return fetch(memberServer + "Register", {
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
  return fetch(memberServer + "Login", {
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
  return fetch(memberServer + "UserInformation", {
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
  return fetch(memberServer + "UserInformation", {
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
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberServer + "ModifyPassword", {
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
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberServer + "UploadUserPic", {
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
  return fetch(memberServer + "GetUserPic", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
function getAdminMemberAsc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberAdminService + "GetCustomers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
function getAdminMemberDesc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberAdminService + "GetCustomersDesc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
function searchMember(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberAdminService + "SearchCustomer?search=" + data, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
function bindPermission(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberAdminService + "AddBlackList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Account: data
    })
  }).then(response => response.json())
}
function unbindPermission(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  console.log(data);
  return fetch(memberAdminService + "DeleteBlackList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Account: data
    })
  }).then(response => response.json())
}
function getBuyHistories() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(buyHistoryService + "GetBuyHistories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
function getBuyHistoriesForAdmin(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(memberAdminService + "GetBuyHistoryByAcc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Account: data
    })
  }).then(response => response.json())
}

export {
  register,
  login,
  modifyPsw,
  UserInfo,
  SendUserInfo,
  uploadUserPic,
  getUserPic,
  getAdminMemberAsc,
  getAdminMemberDesc,
  searchMember,
  bindPermission,
  unbindPermission,
  getBuyHistories,
  getBuyHistoriesForAdmin,
}
