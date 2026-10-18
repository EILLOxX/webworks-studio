# WebWorks Studio — Module 9 Student Starter

## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

Used preline to make a accordion for the visitor questions, and alpine to create card filtering by catagorey

## Alpine Decision

**User/client need:**  
The user needs to be able to find the things their looking for on the cards by catagory filtering.

**Alpine directives used:**  
X-data, x-for, @click, x-bind:class, x-text, x-show

**Why Alpine was appropriate:**  
it was appropiate because the cards needed a clean way of being sorted and hidden

## Preline Decision

**Preline component selected:**  
Ui Accordion

**Problem it solves:**  
It allows the questions to be viewed first and the answeres second minimizing clutter

**How you adapted it:**  
I added back the tailwind classes to keep the same style the visiotor questions had previously

## Accessibility Notes

1. added styles to interactble things that shows if its unactive, active or focused.
2. when using the site with a keyboard every interactable thing can be focused on

## Testing Notes

**Narrow viewport:** keeps everything in perfect view and alinged
**Medium viewport:** everything is perfectly aligned and functions as intended.  
**Wide viewport:** everything is perfectly aligned as it should be and functions as intended.  
**Keyboard testing:** when using the keyboard everything on the page thats interactable can be focused on and used.
**Browser console:** none

## Dependencies

**Alpine.js — how used:** I used alpine.js for the card filtering by catagorey, when pressing category button it hides the other cards that dont match the selected category, and the buttons show accesibility features for hover, click, active and unactive.
**Preline UI — how used:** I used preline for the visitor questions, to make a accordian that opens each question when clicked revealing the answer for the question that has been clicked.
**Tailwind CSS — how used:** I used tailwind to stylize the elements to mathch the pages theme and give elements accesbility features as focus, hover etc.

## Official Documentation Used

- Alpine.js: https://alpinejs.dev/plugins/sort https://alpinejs.dev/directives/show https://alpinejs.dev/directives/data https://alpinejs.dev/directives/for https://alpinejs.dev/directives/bind#binding-classes
- Preline UI: https://preline.co/docs/components/accordion.html

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [x] `npm run build` completes.
- [x] Tailwind styles load.
- [x] Alpine interaction works.
- [x] Preline component works.
- [x] They solve different needs.
- [x] Keyboard testing works.
- [x] Responsive testing is complete.
- [x] Console has no unresolved errors.
- [x] README is complete.
- [x] `css/output.css` is committed.
- [x] `js/vendor/preline.js` is committed.
- [x] `node_modules` is not committed.
- [x] Work is pushed to GitHub.

# LIVE SITE URL

https://eilloxx.github.io/webworks-studio/webworks-module09-student-starter-v2/
