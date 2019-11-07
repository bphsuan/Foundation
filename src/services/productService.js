const productSever = "http://foundation.hsc.nutc.edu.tw/api/Product/"

function addProduct(data) {
  console.log(data);
  //Brand,Name,Color,Ticket,Info,Original_price,圖片
  let formData = new FormData();
  formData.append('Brand', data.Brand)
  formData.append('Name', data.Name)
  formData.append('Color', data.Color)
  formData.append('Ticket', data.Ticket)
  formData.append('Info', data.Info)
  formData.append('Original_price', data.Original_price)
  formData.append('Pic', data.Pic)
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "AddProduct", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + token.token[0]
    },
    body: formData
  }).then(response => response.json())
}

function getProduct() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "GetProducts", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
export { addProduct, getProduct }