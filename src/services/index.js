import axios from "axios";

export function getExpenses() {
  return axios.get("http://localhost:9093/expense/list").then((res) => {
    return res;
  });
}
export function addExpense({ description, id, date, amount }) {
  return axios
    .post("http://localhost:9093/expense/add", {
      description,
      id,
      date,
      amount,
    })
    .then((res) => {
      return res;
    });
}

export function delExpense({ description, id, date, amount }) {
  return axios
    .post("http://localhost:9093/expense/del", {
      description,
      id,
      date,
      amount,
    })
    .then((res) => {
      return res;
    });
}

export function updateExpense({ description, id, date, amount }) {
  return axios
    .post("http://localhost:9093/expense/update", {
      description,
      id,
      date,
      amount,
    })
    .then((res) => {
      return res;
    });
}
