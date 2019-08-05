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
const PRICE = document.querySelector(".price--red");

let length = document.querySelector("#length");
let height = document.querySelector("#height");
let material = document.querySelector("#material");
let checkbox = document.querySelector("#checkbox");

length.addEventListener("change", checkValue);
height.addEventListener("change", checkValue);
material.addEventListener("change", checkValue);
checkbox.addEventListener("change", checkValue);
BTN_NEXT.addEventListener("click", changeFirstForm);
BTN_SUBMIT.addEventListener("click", changeSecondForm);
BTN_PREV.addEventListener("click", openFirstForm);
BTN_CLOSE.addEventListener("click", closePopup);

// выбор материала
function getMaterial(evt) {
  if (material.value == "decking") return 400;
  if (material.value == "modules") return 500;
  if (material.value == "concrete") return 700;
  if (material.value == "grid") return 200;
}

// проверка заполненности полей формы
function checkValue(){
  getPrice();
  console.log(getMaterial());
  if ((length.value != '') && (height.value != '') && (getMaterial() > 199)) {
    BTN_NEXT.disabled = false;
  }
}

// вычисляем сумму заказа
function getPrice(){
  if (checkbox.checked) {
    PRICE.textContent = (length.value * height.value) * (getMaterial() + 200);
  }
  else {
    PRICE.textContent = (length.value * height.value) * getMaterial();
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