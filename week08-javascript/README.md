# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

The elements my Trial disclosure script needed to select was the difficulty toggle for the button and the difficulty panel for the hidden information text. This allowed the disclosure to be hidden and revealed. For the form it needs the Hike form, and the Form feedback element to check for correct validation, and confirmation message. The Form feild elements for creating the perfect trail plan to follow as a final feedback.

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

The events that were listened for was click and submit. the click is to activate the disclosure button tasks by opening and closing. Submit is for form's and when it submits it sends all the data to the server upon submit.

### Decision 3 — State / DOM Update

How did the interface change after user action?

The difficulty section does reveal and hide important information. the form gives proper feedback for when its completed or when it has invalid information.

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

I made sure not to break anything and doubled checked that everything works with the keyboard control and every action had some type of response.

---

## Testing Notes

### Difficulty Disclosure

- Mouse: Every mouse action works
- Keyboard: Keyboard controls functions perfectly
- `aria-expanded`: Opens and closes as designed
- Console errors: fixed duplicate words and spelling which made the button not function. no more errors.

### Planning Form

- Empty/invalid submission: when not done correctly it gives feedback on how to fill in the form properly.
- Valid submission: when the form is completed it gives feedback with the planned trail names and filter.
- Keyboard: keyboard controls work correctly
- Console errors: no console errors

---

## Live Site

https://eilloxx.github.io/webworks-studio/week08-javascript
