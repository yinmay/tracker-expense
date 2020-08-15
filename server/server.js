const express = require("express");
var cors = require("cors");

const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const expenseRouter = require("./expense");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/expense", expenseRouter);
// app.use(cookieParser());

// res.setHeader("Access-Control-Allow-Origin", "*");

app.listen(9093, () => console.log("start server"));
