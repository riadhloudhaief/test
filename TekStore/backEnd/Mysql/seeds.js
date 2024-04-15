const Product = require("./index");
const sampleData = require("../../react-client/data.json");

Product.bulkCreate(sampleData, { ignoreDuplicates: true }).then(() =>
  console.log("products data have been saved")
);

