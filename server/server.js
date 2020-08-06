const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const expenseRouter = require("./expense");

const app = express();

app.use("/expense", expenseRouter);
// app.use(cookieParser());
app.use(bodyParser.json());

app.listen(9093, () => console.log("start server"));
