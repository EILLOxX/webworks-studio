# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

Briefly describe what you refactored and added.

I used React.js to make service cards. i added the buttons and filtered data to make categorys that change on click and sort the cards by the catagory they are in from the data selected category. I also used aria-pressed with selected catagory for accessibility.

---

# React Decisions

Document approximately three meaningful React decisions.

## Decision 1

**React Concept:**  
list rendering

**Used For:**  
created reusuable  elements

**Why It Helps:**  
it allows elements to be resued through out the document with out having to retype certain information everytime.

## Decision 2

**React Concept:**
state

**Used For:**  
renders components with information

**Why It Helps:**
it allows the content to be re-rendered with the new values of information by using usestate.

## Decision 3

**React Concept:**
event

**Used For:**
onClick by pressing on a button which allows for the usestate to take affect and the accessibiltys like the aria-pressed.

**Why It Helps:**
it helps triggers certain things for certain components like accessibiltys

---

# React Reflection

Write approximately **75–100 words** responding to:

> How is working with React components different from manipulating the DOM directly as you did in Week 8? What seems easier, and what seems more complex?

I found React being more easier in terms of being quicker to set up and resuse components while i found manipulating the dom from week 8 more time consuming. I say both React and dom is complex in their own way, react was difficult for me to understand but once complete it felt like a shortcut since i was able to create data to reuse, while dom also took me a tiny while to get going but at the end i had to keep repeating steps that i didnt have to do with react.

---

# Testing Notes

- [x] `npm install` completed successfully
- [x] `npm run dev` runs the project
- [x] ServiceCard is reusable
- [x] Services render from the supplied array
- [x] Every rendered service uses a stable key
- [x] All filter works
- [x] Health filter works
- [x] Housing filter works
- [x] Community filter works
- [x] Active filter is visually clear
- [x] Active filter uses an accessible programmatic state
- [x] Keyboard interaction works
- [x] Browser console has no unresolved warnings/errors
- [x] `npm run build` completes successfully

---

# Final Handoff Check

- [x] My project folder is named `week10-react`
- [x] I used the supplied React/Vite project
- [x] `ServiceCard.jsx` exists
- [x] I used props
- [x] I used `map()`
- [x] I used stable keys
- [x] I used `useState()`
- [x] I used React event handling
- [x] I used native buttons for filters
- [x] `node_modules` is not committed
- [x] My README is complete
- [x] I committed and pushed the completed project
