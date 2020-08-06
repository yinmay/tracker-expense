const express = require("express");
const mongoose = require("mongoose");

module.exports = {
  getModel: (name) => {
    return mongoose.model(name);
  },
};

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

//mongoose store json, easier than mysql
const Expense = mongoose.model(
  "expense",
  new mongoose.Schema({
    id: { type: Number, require: true },
    description: { type: String, require: true },
    amount: { type: Number, require: true },
    date: { type: String, require: true },
  })
);

Expense.create(
  { id: 4, description: "ball", amount: 3, date: "123423412" },
  (err, doc) => {
    if (!err) {
      console.log(doc);
    } else {
      console.log(err);
    }
  }
);

const app = express();

Expense.remove({ id: 3 }, (err, doc) => {
  console.log(doc);
});

Expense.update({ id: 4 }, { $set: { amount: 4 } }, (err, doc) => {
  console.log(doc);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Mei</h1>");
});
app.get("/data", (req, res) => {
  Expense.find({}, (err, doc) => {
    return res.json(doc);
  });
});

app.listen(9093, () => {
  console.log("node start at port 9093");
});
