const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const models = {
  expense: {
    id: { type: Number, require: true },
    description: { type: String, require: true },
    amount: { type: Number, require: true },
    date: { type: String, require: true },
  },
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: (name) => {
    return mongoose.model(name);
  },
};
