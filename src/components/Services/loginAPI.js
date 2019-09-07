import axios from 'axios';

// const API = 'foundation.hsc.nutc.edu.tw/api/Customer/Login';
/**
 * 取得資料
 */
// function login(account, password) {
//   return new Promise((resolve, reject) => {
//     axios.post("http://foundation.hsc.nutc.edu.tw/api/Customer/Login", {
//       Account: account,
//       Password: password,
//     }, {
//         headers: {
//           'Access-Control-Allow-Origin': '*'
//         }
//       })
//       .then(response => {
//         resolve(response);
//         console.log('Success:', JSON.stringify(response))
//       })
//       .catch(error => {
//         console.log('error', error);
//         reject(error);
//       });
//   })
// }

// function login(account, password) {
//     return new Promise((resolve, reject) => {
//         var data = { Account: account, Password: password }
//         console.log("進入API囉")
//         fetch("foundation.hsc.nutc.edu.tw/api/Customer/Login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//             // JSON.stringify({
//             //     Account: account,
//             //     Password: password
//             // })
//         })
//             .then(r => r.json())
//             .then(response => {
//                 console.log('Success:', JSON.stringify(response))
//                 resolve(response);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 reject(error);
//             });
//     })
// }

// function login(account, password) {
//     axios.post("http://foundation.hsc.nutc.edu.tw/api/Customer/Login", {
//         Account: account,
//         Password: password,
//     })
//         .then(response => {
//             console.log(response);
//             return response;
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }

// function login(account, password) {
//     var data = { Account: account, Password: password }
//     console.log("進入API囉")
//     fetch("foundation.hsc.nutc.edu.tw/api/Customer/Login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "applicati`on/json"
//         },
//         body: JSON.stringify(data)
//         // JSON.stringify({
//         //     Account: account,
//         //     Password: password
//         // })
//     }).then(r => r.json())
//         .then(response => {
//             console.log('Success:', JSON.stringify(response))
//             return response;
//         })
//         .catch(error => console.error('Error:', error));
// }

// export {
//   login,
// }