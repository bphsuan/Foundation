const productSever = "http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Product/"
const productAdminSever = "http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Admin/"

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

function getProductsDesc() {
  return fetch(productSever + "GetProductsDesc", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => response.json())
}

function getProductsDescByAcc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "GetProductsDescByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function getProductsAsc() {
  return fetch(productSever + "GetProducts", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => response.json())
}

function getProductsAscByAcc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "GetProductsByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function searchProducts(data) {
  return fetch(productSever + "SearchProduct?search=" + data, {
    method: "POST",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => response.json())
}

function searchProductsByAcc(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "SearchProByAcc?search=" + data, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function getAdminProduct() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productAdminSever + "GetProductsForAdmin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function outProduct(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "OutProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}

function cancelOutProduct(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "CancelOutProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}

function addFavotie(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "AddFavorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}

function cancelFavotie(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "CancelFavorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}
function deleteProduct(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "DeleteProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}

function getProductsHot3() {
  return fetch(productSever + "GetProductsHotTop3", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => response.json())
}

function getProductsHot3ByAcc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "GetProductsHotTop3ByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}


function getProductsHot() {
  return fetch(productSever + "GetProductsHot", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  }).then(response => response.json())
}

function getProductsHotByAcc() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productSever + "GetProductsHotByAcc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function getProductsDescForAdmin() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productAdminSever + "GetProductsDescForAdmin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function getProductsForAdmin() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productAdminSever + "GetProductsForAdmin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function getProductsHotForAdmin() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(productAdminSever + "GetProductsHotForAdmin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

export {
  addProduct,
  getProductsDesc,
  getProductsDescByAcc,
  getProductsAsc,
  getProductsAscByAcc,
  searchProducts,
  searchProductsByAcc,
  getAdminProduct,
  outProduct,
  cancelOutProduct,
  addFavotie,
  cancelFavotie,
  deleteProduct,
  getProductsHot3,
  getProductsHot,
  getProductsHotByAcc,
  getProductsHot3ByAcc,
  getProductsDescForAdmin,
  getProductsForAdmin,
  getProductsHotForAdmin
}
