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

### 32. Adding Routing

The "react-router-dom"-package allows us to add routing functionality to React; it handles URL's without fetching new HTML pages.

### 33. Adding Links & Navigation

The "react-router-dom"-package provides a `Link`-component.
It will render a anchor-tag but internally React Router DOM attaches a click-listener to the tag which will prevent that browser default of sending a request.
Instead it parses the URL defined, changes it into the addressbar and load the appropriate components.

```js
<Link to="/">All Meetups</Link>
```

### 34. Scoping Component Styles With CSS Modules

create-react-app supports CSS Modules. It's a behind-the-scenes code transformation which will make sure that we can attach css-files to specific components. We need to rename the css file to end with ".module.css".

_in MainNavigation.js:_

```js
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
  )
}
```

### 35. Outputting Lists of Data & Components

_in AllMeetups.js:_

```js
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}
```

### 42. Navigating Programmatically

```js
import { useHistory } from "react-router-dom";
```

### 45 - 48. Introducing React Context

---

---

---

## Section 3: Pages & File-based Routing

### 53. What is "File-based Routing"? And Why Is It Helpful?

With NextJS we create React-component files in a special `pages` folder and then let NextJS infer the routes from the folder structure
