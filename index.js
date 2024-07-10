const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://madhurkjindal:tX0nCfXAPo5JEiGv@cluster0.wmo8dlz.mongodb.net//MyCrudAppis");
    console.log("Database Connected");
  } catch (error) {
    console.log("error in db connection");
    console.log(error);
  }

  // create account on mongodb atlas
};

function m1(req, res, next) {
  console.log("Hi, Middleware is on Server");
  next()
}

app.use(express.json());
app.use(cors());
app.use(m1);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.listen(4000, () => {
  dbConnect();
  console.log("server started on port 4000");
});