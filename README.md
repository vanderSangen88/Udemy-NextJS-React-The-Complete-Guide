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

---

---

---

## Section 4: Project Time - Working with File-based Routing

### 76. Adding Buttons & Icons

### 77. Adding the "Event Detail" Page (Dynamic Route)

### 78. Adding a General Layout Wrapper Component

### 79. Working on the "All Events" Page

### 80. Adding a Filter Form for Filtering Events

### 81. Navigating to the "Filtered Events" Page Programmatically

### 82. Extracting Data on the Catch-All Page

### 83. Final Steps

---

---

---

## Section 5: Page Pre-Rendering & Data Fetching

### 88. Introducing Static Generation with "getStaticProps"

#### Static Generation

Pre-generate a page (with data prepared on the server-side) during build time.  
Pages are prepared ahead to time and can be cached by the server / CDN serving the app.

```js
export async function getStaticProps(context) {...}
```

This function can be added to any "page"-file and export it. Then NextJS will pre-generate the page.

### 93. Utilizing Incremental Static Regeneration (ISR)

Pre-Re-generate it on every request, at most every X seconds.

```js
export async function getStaticProps() {
  ...

  return {
    props: {
      ...
    },
    revalidate: 60, // every minute
  };
}
```

### 97. Introducing "getStaticPaths" For Dynamic Pages

#### Pre-Generated Paths (Routes)

Dynamic pages (`[id.js]` etc) don't just need data: You also need to know which `[id]` values will be available.
Multiple concrete [id] page instances (e.g. id = 1, id = 2 etc) are pre-generated

```js
export async function getStaticPaths() {...}
```

### 100. Working with Fallback Pages

Can be set to true or "blocking" and determine which pages we want to prefetch.
Not pregenerate low-visited pages.

1. true:
   Return fallback-state:

```js
if (!product) {
  return <p>Loading...</p>;
}
```

2. "blocking" is just like old websites, takes longer to load.

### 103. Introducing "getServerSideProps" for Server-side Rendering (SSR)

```js
export async function getServerSideProps() { ... }
```

Use either `getStaticProps` OR `getServerSideProps` because they clash.
