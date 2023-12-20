const mongoose = require('mongoose');

const mongoURL = process.env.mongoURI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error connecting to mongodb =>   ${error}`)
  }
}

module.exports = connectDB;

