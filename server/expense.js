const express = require("express");
const Router = express.Router();
const model = require("./models");

const Expense = model.getModel("expense");

Router.get("/list", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Expense.find({}, (err, doc) => {
    console.log(doc);
    return res.json(doc);
  });
});

Router.post("/add", (req, res) => {
  console.log(req.body);
  Expense.create();
});

module.exports = Router;
