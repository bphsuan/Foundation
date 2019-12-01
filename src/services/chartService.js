const chartServer = "http://foundation.hsc.nutc.edu.tw/api/Chart/";

function brandHistoryChart() {
  return fetch(chartServer + "GetBrandHistoryForWeb", {
    method: "GET",
    headers: ({
    })
  }).then(response => response.json())
}
function memberGenderChart() {
  return fetch(chartServer + "GetGenderFoeWeb", {
    method: "GET",
    headers: ({
    })
  }).then(response => response.json())
}
function memberAge() {
  return fetch(chartServer + "GetAgeForWeb", {
    method: "GET",
    headers: ({
    })
  }).then(response => response.json())
}
function buyFrequencyChart() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(chartServer + "GetBuyFrequency", {
    method: "GET",
    headers: ({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Authorization": "Bearer " + token.token[0]
    })
  }).then(response => response.json())
}
function buyBrandChart() {
  const token = (localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : {
    token: []
  };
  return fetch(chartServer + "GetBuyBrand", {
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
  brandHistoryChart, memberGenderChart, memberAge, buyFrequencyChart, buyBrandChart
}