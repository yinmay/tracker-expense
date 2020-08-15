const express = require("express");
const Router = express.Router();
const model = require("./models");

const Expense = model.getModel("expense");

Router.get("/list", (req, res) => {
  Expense.find({}, (err, doc) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    return res.json(doc);
  });
});

Router.post("/add", (req, res) => {
  Expense.create(req.body, (err, doc) => {
    if (!err) {
      console.log(doc);
    } else {
      console.log(err);
    }
  });
  res.end();
});

Router.post("/del", (req, res) => {
  const { id } = req.body;
  Expense.remove({ id }, (err, doc) => {
    console.log(doc);
  });
  res.end();
});
Router.post("/update", (req, res) => {
  const { id, amount, description, date } = req.body;
  Expense.update(
    { id },
    { $set: { amount, date, description } },
    (err, doc) => {
      console.log(doc);
    }
  );
  res.end();
});

module.exports = Router;
