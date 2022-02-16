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
  return elems;
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

function turn(direction) {
  // Unimplemented
}

window.onload = function() {
  // setInterval(() => {
  //   console.log(getElementUnderMouse());
  // }, 1000);
};
