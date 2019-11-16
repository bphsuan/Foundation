const contactServer = "http://foundation.hsc.nutc.edu.tw/api/Contact/";

function sendContact(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(contactServer + "AddContact", {
    method: "POST",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    }),
    body: JSON.stringify({
      Name: data.Name,
      Email: data.Email,
      Content: data.Content
    })
  }).then(response => response.json())
}

export {
  sendContact,
}