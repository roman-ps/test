'use strict';

const FORM = document.querySelector(".form");
const BTN_NEXT = document.querySelector(".btn--next");
const BTN_PREV = document.querySelector(".btn--prev");
const BTN_SUBMIT = document.querySelector(".btn--submit");
const BTN_CLOSE = document.querySelector(".btn--close");
const INSTALL = document.querySelector(".checkbox--install");
const CONTAINER_FIRST = document.querySelector(".container--first");
const CONTAINER_SECOND = document.querySelector(".container--second");
const POPUP = document.querySelector(".popup");

let length = document.querySelector("#length");
let height = document.querySelector("#height");
let checkbox = document.querySelector("#checkbox");
/*
BTN_NEXT.addEventListener("click", changeFormVisibility);
BTN_SUBMIT.addEventListener("click", changeFormVisibility);
//BTN.addEventListener("click", changeFormVisibility);

// изменение видимости формы
function changeFormVisibility(evt){
  evt.preventDefault;
  hideForm(evt);
  //showForm(evt);
}

// скрытие формы
function hideForm(evt){
  evt.preventDefault();
  let a = BTN_NEXT.parentNode;
  a.classList.toggle("hidden");
  console.log(a.nextSibling);
}

// показ формы
function showForm(evt){
  evt.preventDefault();
}
*/

BTN_NEXT.addEventListener("click", changeFirstForm);
BTN_SUBMIT.addEventListener("click", changeSecondForm);
BTN_PREV.addEventListener("click", openFirstForm);
BTN_CLOSE.addEventListener("click", closePopup);

function checkValue(){
  if (length.value != 0 && height.value != 0) {
    BTN_NEXT.disable = false;
  }
}

function changeFirstForm(evt){
  evt.preventDefault;
  CONTAINER_FIRST.classList.toggle("hidden");
  CONTAINER_SECOND.classList.toggle("hidden");
}

function changeSecondForm(evt){
  evt.preventDefault;
  CONTAINER_SECOND.classList.toggle("hidden");
  POPUP.classList.toggle("hidden");
}

function openFirstForm(evt){
  evt.preventDefault;
  CONTAINER_SECOND.classList.toggle("hidden");
  CONTAINER_FIRST.classList.toggle("hidden");
}

function closePopup(evt) {
  evt.preventDefault;
  POPUP.classList.toggle("hidden");
}