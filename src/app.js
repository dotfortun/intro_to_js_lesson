/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import roomData from "./room.js";

let gameState = {
  actionHistory: []
};

function getElementUnderMouse() {
  let elems = [];
  document.querySelectorAll(":hover").forEach(el => {
    elems.push(el.id);
  });
  return elems.filter(el => el);
}

function output(text) {
  document.getElementById("output").innerHTML = text ? text : "&nbsp;";
}

function look(target) {
  output("Look not implemented yet.");
}

function take(target) {
  output("Take not implemented yet.");
}

function use(target) {
  output("Use not implemented yet.");
}

function speak(target) {
  output("Speak not implemented yet.");
}

function doAction(target) {
  let action = document.querySelector(".btn-group :checked").id;

  // We need to implement interact history at Some Point™.
  console.log("actionHistory:", gameState.actionHistory);

  if (action === "look") {
    look(target);
  } else if (action === "take") {
    take(target);
  } else if (action === "use") {
    use(target);
  } else if (action === "speak") {
    speak(target);
  }
}

window.onload = function() {
  // This enables debug mode if you add ?debug to the url.
  if (new URLSearchParams(window.location.search).has("debug")) {
    document.querySelectorAll(".screen div").forEach(el => {
      el.classList.add("debug");
      el.innerHTML = el.id;
    });
  }

  /* Here we're finding all elements that are marked as interactable in the HTML.
   * We then toss the identifiers for those into an array so that we can check against that later.
   */
  const interactable = Array.from(
    document.querySelectorAll("[data-interact=true]")
  ).map(el => el.id);

  /* We add the event listener to the window here.  This handles most of the Magic for this page.
   */
  window.addEventListener("click", () => {
    // The following line runs the function getElementsUnderMouse.
    let elems = getElementUnderMouse();
    // Then we take the last element (the one on top)
    let el = elems.pop();
    // And if that element is in the array of interactable elements, we doAction to it.
    if (interactable.includes(el)) {
      doAction(el);
    }
  });
};
