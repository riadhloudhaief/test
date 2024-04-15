
const productRoutes= require("../routes/")
const { Sequelize, DataTypes } = require("sequelize")
const {DATABASE_USERNAME,DATABASE_PASSWORD}=require("./dtb")
// create a database connection in your application using a Sequelize instance
const connection = new Sequelize(
  "store",
  "DATABASE_USERNAME",
  "DATABASE_PASSWORD",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//verify your connection here !
connection.authenticate();

//your Product table using sequilize
const Product = connection.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categories: {
    type: DataTypes.ENUM("phones", "computers", "electronics"),
    allowNull: false,
    defaultValue: "electronics",
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// this call, Sequelize will automatically perform an SQL query to the database and create a table, printing the message phrase table created successfully!.

// !!!!!!!!!!!!!!!!please use the code below only one time!!!!!!!!!!!!!!!!!!!

// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("product table created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });

// export your Model Phrase below
module.exports = Product;
