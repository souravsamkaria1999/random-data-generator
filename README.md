# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Storybook

Build component driven UIs faster
Storybook is an open source tool for building UI components and pages in isolation.
It streamlines UI development, testing, and documentation

Document UI for your team to reuse
Storybook brings together UI, examples, and documentation in one place. That helps teammates adopt existing UI patterns.

npm run storybook

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen

### `npm run buildDependency`

## npm install --save-dev @testing-library/react jest

Simple and complete React DOM testing utilities that encourage good testing practices.
The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is:

The more your tests resemble the way your software is used, the more confidence they can give you.

Jest matchers and utilities for testing React Test Renderer.

## npm install react-redux

React-Redux is conceptually pretty simple. It subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.

## npm install axios

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

## npm install express

Fast, unopinionated, minimalist web framework for node.

const express = require('express')
const app = express()

app.get('/', function (req, res) {
res.send('Hello World')
})

app.listen(8000)

## npm install cors

This is a Node.js module available through the npm registry. Installation is done using the npm install command:

$ npm install cors

Usage

Simple Usage (Enable All CORS Requests)
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())