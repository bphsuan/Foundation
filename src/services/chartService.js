const chartServer = "http://foundation.hsc.nutc.edu.tw/api/Chart/";

function brandHistoryChart() {
  return fetch(chartServer + "GetBrandHistory", {
    method: "GET",
    headers: ({
    })
  }).then(response => response.json())
}
function memberGenderChart() {
  return fetch(chartServer + "GetGender", {
    method: "GET",
    headers: ({
    })
  }).then(response => response.json())
}

export {
  brandHistoryChart, memberGenderChart
}