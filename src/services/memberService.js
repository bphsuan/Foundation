const registerAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Register";
const loginAPI = "http://foundation.hsc.nutc.edu.tw/api/Customer/Login";

function register(data) {
  // console.log(data)
  fetch(registerAPI, {
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
    .then(responese => {
      console.log("Success", JSON.stringify(responese))
    })
    .catch(error => console.log("Error", error)
    );
}
export {
  register
}

