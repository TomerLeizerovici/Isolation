require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const article = require("./routes/article");

app.use(cors());
app.use("/articles", article);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => console.log(`server is listening at PORT [${PORT}]`));
