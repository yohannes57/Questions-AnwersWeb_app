const express = require("express");
// const pool = require("./server/config/database");
const pool = require("./server/config/database");
require("dotenv").config();
const cors = require("cors");
const routerUser = require("./server/api/users/user.router");
const routerQuestion =require("./server/api/questions/question.router")
const routerAnswers =require("./server/api/answers/answer.router")
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT;

app.use("/api/users", routerUser);
app.use('/api/questions', routerQuestion);
app.use('/api/answers',routerAnswers);
app.get("/", (req, res) => {
  // call back fun ,sends heall as response
  res.send("this is heaven!!");
  res.end();
});

// app.get("/home", (req, res) => {
//   // call back fun ,sends heall as response
//   res.send("this is home!!");
//   res.end();
// });

app.listen(port, () => {console.log(`Listening at http://localhost:${port}`);
});
