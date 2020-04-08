require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// system constants
const PORT = process.env.PORT;

// DB connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to DB"));

// allows the server to recive JSON in the body of a request
app.use(express.json());

// basic routing using another .js file
const subscriberRoute = require("./routes/subscribers");
app.use("/subscribers", subscriberRoute);

// server start
app.listen(PORT, () => {
  console.log(`[SERVER http://localhost:${PORT}] is listening`);
});
