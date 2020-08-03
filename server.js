const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const config = require('/config');
// const Career = require('./models/careerForm');
const multisteps = require("./routes/multiStep.route");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());

// DataBase config
const db = require("./config/keys").mongoURI;

//Datebase config another way to connect
// const db = config.get('mongoURI');

//connect to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB connection estabished successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Use Routes
app.use("/multisteps", multisteps);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
