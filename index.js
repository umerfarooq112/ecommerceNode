const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
PORT = 5000;
const AuthRoutes = require("./routes/AuthRoutes");

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Connected to DB")
);
app.use(express.json());
app.use("/api/user", AuthRoutes);

app.listen(5000, () => console.log(`Running server on port: ${PORT}`));
