const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignup").then(() => {
  console.log("mongodb connected");
}).catch((error) => {
  console.error("MongoDB connection failed:", error);
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Hide password field from query results
  },
});

const collections = mongoose.model('Collections', userSchema);

module.exports = collections;
