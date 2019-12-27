const couponServer = "http://foundation_backend.hsc.nutc.edu.tw/api/Coupon/";

function getCoupon(data) {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(couponServer + "GetCoupons", {
    method: "GET",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    })
  }).then(response => response.json())
}

export {
  getCoupon,
}