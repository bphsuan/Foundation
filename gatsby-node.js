// const fetch = require('node-fetch');
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   // Fetch the data
//   const res = await fetch(`http://foundation.hsc.nutc.edu.tw/api/Product/GetProducts`);
//   // Transform the data into json
//   const data = await res.json();
//   data.forEach(product => {
//     console.log(product)
//     createPage({
//       path: `/ProductDetail/${product.Product_Id}`,
//       component: require.resolve(`./src/pages/ProductDetail.js`),
//       context: { product },
//     })
//   })
// }