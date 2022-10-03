const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");
dotenv.config();
PORT = 5000;
const AuthRoutes = require("./routes/AuthRoutes");
const ItemRoutes = require("./routes/ItemRoutes");

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Connected to DB")
);
app.use(express.json());
app.use(cors());
app.use("/api/user", AuthRoutes);
app.use("/api/items", ItemRoutes);

app.listen(5000, () => console.log(`Running server on port: ${PORT}`));
