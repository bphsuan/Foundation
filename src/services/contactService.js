const contactServer = "http://findyourfoundation.westindia.cloudapp.azure.com:8080/api/Contact/";

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

function getContact() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(contactServer + "GetContacts", {
    method: "GET",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    }),
  }).then(response => response.json())
}

export {
  sendContact,
  getContact
}