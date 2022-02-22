/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
  // Unimplemented
}

function take(target) {
  // Unimplemented
}

function use(target) {
  // Unimplemented
}

function speak(target) {
  // Unimplemented
}

function doAction(target) {
  let action = document.querySelector(".btn-group:checked").id;
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
  // We are finding all objects on the page with the "data-interact" property.
  let interactable = Array(document.querySelectorAll("[data-interact]")).map(
    el => el.id
  );
  console.log(interactable);
  setInterval(() => {
    let elems = getElementUnderMouse();
    output(elems);
  }, 250);
};
