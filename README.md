# tracker-expense

a single page webapp created by dva-cli, react-hooks and antd4

## project structor

```
src
 components
 models
 routes
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

1.`npm i --save react@1latest`

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

### Create a Model for Redux

1. Create a model file `src/models/global.js`

### import TrackerExpense components in the Indexpage

### Create the other components

1. Create an folder called components `src/components`
2. Put all the related components in it.
