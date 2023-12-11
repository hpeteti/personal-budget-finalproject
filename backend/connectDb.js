const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
  try {
    const url = 'mongodb://127.0.0.1:27017/project'; //  MongoDB URL
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.cyan(`Connected to MongoDB at ${url}`));
  } catch (error) {
    console.error(chalk.red(`Error connecting to MongoDB: ${error}`));
  }
};

module.exports = connectDB;

// Call the function to connect to the database
connectDB();
