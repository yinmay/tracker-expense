# tracker-expense

a single page webapp created by dva-cli, react-hooks and antd4

## project structor

```
src frontend
   components
   models
   routes
   services
   utils
server backend
index.css
index.js
router.js
.editorconfig
.eslintrc
.webpackrc
```

### Install

git clone `https://github.com/yinmay/tracker-expense.git`
yarn or npm i
`npm start`

## From Scratch

A sequence of steps that I did to create this app.

### Install dva-cli

```
 $ npm install dva-cli -g
 $ dva new dva-quickstart
```

### Update the React, the React-dom to use the react-hooks

```
1. npm i --save react@16.8.6 react-dom@16.8.6
```

### add the UI library of antd4

1.

```
npm i --save react@1latest
```

2. create a new file called `.webpackrc` and wite the following code:

```
{
    "extraBabelPlugins": [
 	["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
]
}
```

What I used to do is Edit `src/index.css`
Import antd's CSS: `@import '~antd/dist/antd.css';`

### Use Ant Design's Layout

1. Import Ant components
   ```
   import { Layout, Menu, Breadcrumb } from 'antd';
   ```

### Create a Model

1. Create a model file `src/models/example.js`

### import TrackerExpense components in the Indexpage

### Create the other components

1. Create a folder called components `src/components`
2. Put all the related components in it.

### create server

1. Create a file in the folder server `server/server.js`
2. `npm i --save express`and `npm i -g nodemon` for hotload

```
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello, Mei</h1>");
});
app.get("/data", (req, res) => {
  res.json({ name: "Mei" });
});

app.listen(9093, () => {
  console.log("node start at port 9093");
});

```

### connect mongoDB, mongoose and do the configuration

install mongoDB from the website of the mongoDB
`npm i --save mongoose`
1 `mongod --config /usr/local/etc/mongod.conf`
body-parser

```
const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL);
```

<!-- ### Wire up DVA
   1. Set namespace to `global`
   1. Initialize state as a type of `TodoState`
   1. Add a reducer
   1. Add effects. Each "effect" is later triggered by `dispatch` as `type: "[namespace]/[effect name]"`, with `payload`
   1. Once an effect is completed, use `yield put` to trigger a reducer
3. In `src/pages/todo/index.tsx`

   1. Declare an Props interface to access `dispatch`, `loading`, and data from `dva`
      ```
      interface ViewProps extends TodoState {
        dispatch: any;
        loading: boolean;
      }
      ```
   1. Use decoration to connect `dva` to component.

      ```
      @connect(({ todos, loading }) => ({
        todos,
        loading: loading.models.todos,
      })) -->

      ```
