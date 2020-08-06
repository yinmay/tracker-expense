import request from "../utils/request";

export function getExpenses() {
  return request("/express/list");
}

// export function getExpenses() {
//   debugger;
//   // return fetch("/express/list");
//   const options = {
//     method: "get",
//     // body: JSON.stringify({}),
//     // credentials: 'include',
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };
//   fetch("/express/list", options)
//     .then((response) => {
//       response.json();
//       debugger;
//     })
//     .then((res) => {
//       debugger;
//       console.log(666, res);
//     });
// }
