require('dotenv').config();
const connectDB = require('../db/connect.js');
const Product = require('../models/Product.js');
const jsonProducts = require('../products.json');

const start = async () => {
  try {
      await connectDB(process.env.MONGO_URI);
      await Product.deleteMany();
      await Product.create(jsonProducts);
      process.exit(0);
  } catch (err) {
      console.log(err.message);
      process.exit(1);
  }
};

start();