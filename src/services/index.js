import request from "../utils/request";

// export function query() {
//   return request('/api/users');
// }

export function getExpenses() {
  return request.get("/express/list");
}
