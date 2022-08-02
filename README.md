# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Storybook

Build component driven UIs faster
Storybook is an open source tool for building UI components and pages in isolation.
It streamlines UI development, testing, and documentation

### npm run storybook

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen
 
### npm install --save-dev @testing-library/react jest

Snapshot test is added
Test Content
Test context Use case is added

for reference Test and TestUseCase folder

### npm install redux

### npm install react-redux

React-Redux is conceptually pretty simple. It subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.

Use for Global State management

Added folder name store , store.js for configure store

## actions

import { get } from "../api/axios.js";

export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
type: CREATE_TODO,
payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
type: REMOVE_TODO,
payload: { text },
});

## reducers

import { CREATE_TODO, REMOVE_TODO, USER_ROLE_SUCCESS } from "./actions";

export const todos = (state = [], action) => {
const { type, payload } = action;

switch (type) {
case CREATE_TODO: {
const { text } = payload;
const newTodo = {
text,
isCompleted: false,
};
return state.concat(newTodo);
}

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    default:
      return state;

}
};

# Inside Component

import React from "react";
import { removeTodo } from "./actions";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos = [], onRemovePressed }) => (

  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

### npm install axios

Added api folder for use import api/axios.js into your component and use the same

export function getUserRole(userId) {
return async () => {
const response = await get(`Path/${userId}`);
if (response && response.status === 200 && response.data) {
getUsersRoleSuccess(response.data);
} else {
getUsersRoleFailure("Please Try again");
}
};
}

Promise based HTTP client for the browser and node.js

Features
Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
Client side support for protecting against XSRF

### npm install express

Fast, unopinionated, minimalist web framework for node.

const express = require('express')
const app = express()

app.get('/', function (req, res) {
res.send('Hello World')
})

app.listen(8000)

### npm install cors

This is a Node.js module available through the npm registry. Installation is done using the npm install command:

$ npm install cors

Usage

Simple Usage (Enable All CORS Requests)
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

### Added Context 
Add context folder inside this Authcontext.js , AuthData.js filefor creating and provide context data
user.js consumes the context 
Add wrapper in App.js file for context 