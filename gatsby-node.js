// const fetch = require('node-fetch');
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   // Fetch the data
//   const res = await fetch(`http://findyourfoundation.southcentralus.cloudapp.azure.com:8080/api/Product/GetProducts`);
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
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }