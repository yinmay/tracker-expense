import request from "../utils/request";

export function getExpenses() {
  return request.get("/express/list");
  // return fetch("/expense/list").then((response) => response.json());
}
