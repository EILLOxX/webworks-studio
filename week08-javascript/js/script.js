// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

"use strict";

const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

difficultyButton.addEventListener("click", () => {
  const isOpen = difficultyButton.getAttribute("aria-expanded") === "true";
  console.log(isOpen);

  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
  difficultyPanel.hidden = !isOpen;
});

// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

const planForm = document.querySelector("#hike-form");
const feedback = document.querySelector("#form-feedback");

planForm.addEventListener("submit", (event) => {
  if (!planForm.checkValidity()) {
    return;
  }

  event.preventDefault();

  const trail = document.querySelector("#trail").value;
  const experience = document.querySelector("#experience").value;
  const hours = document.querySelector("#hours").value;

  feedback.textContent = `Plan ready: ${trail} for ${experience.toLowerCase()}, ${hours} hours. Check official conditions before you leave.`;
});
