const cartSever = "http://foundation.hsc.nutc.edu.tw/api/Cart/"

function addCart(data) {
  console.log(data);
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(cartSever + "AddToCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}

function getCart() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(cartSever + "GetCartByAcc", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}

function deleteCart(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(cartSever + "DeleteCartById", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      Product_Id: data
    })
  }).then(response => response.json())
}
function sendCart(data, coupon) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(cartSever + "BuyProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
    body: JSON.stringify({
      cartList: data,
      CouponRecord_Id: coupon
    })
  }).then(response => response.json())
}
function removeCart() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(cartSever + "DeleteCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token.token[0]
    },
  }).then(response => response.json())
}
export { addCart, getCart, deleteCart, sendCart, removeCart, }