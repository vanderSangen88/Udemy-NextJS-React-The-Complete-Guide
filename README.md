# Udemy-NextJS-React-The-Complete-Guide

## Section 1: Getting Started
### Key Features & Benefits of NextJS:
- Server-side Page (Pre-)Rendering
- File-based Routing
- Build Fullstack React Apps!

### Prerequisites
- NodeJS

### 7. /01_demo
Create file called .babelrc in your root directory and add this code
```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

And in .eslintrc replace the existing code with
```json
{
  "extends": ["next/babel"]
}
```
---
---
---
## Section 2: React Refresher

### 16. What is React?

React is a client-side JavaScript library for building user interfaces. 
### 17. Why use React?

React makes building larger, rich, complex interfaces easier by giving us a higher level syntax to write declarative component focussed code.

### 20. /02_react-app

1. run:
```code
npx create-react-app 02_react-app
```
2. run:
```code
npm start
```
### 29. Introducing State

> "useState" is a React hook, and can only be called directly in React component functions or custom React Hooks.

useState always returns an array with 2 elements. The first element is the current state's snapshot. The second element is a function that allows you to change the value. Not by assigning but by calling this function.

### 31. Adding Routing

The "react-router-dom"-package allows us to add routing functionality to React; it handles URL's without fetching new HTML pages.

