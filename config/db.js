// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb+srv://rama:rama@cluster0.mcjoxhf.mongodb.net/test?retryWrites=true&w=majority');
  console.log('DB connected')
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = mongoDB