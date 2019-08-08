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
const METERS = document.querySelector(".item__measure");

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
  else return 0;
}

// вычисляем количество цифр в числе
function getSumNumbers(numbers){
  for (var i = 0; numbers > 1; i++) {
    numbers = numbers / 10;
  }
  return i;
}

// склоняем окончания метров
/*function bowMeters(number){
  if (number < 2) {
    if (length.value == 1) {METERS.textContent = "метр"}
    if ((length.value > 1) && (length.value <= 4)) {METERS.textContent = "метра"}
    if (length.value > 4) {METERS.textContent = "метров"}
  } else {
    if ((length.value % 10 == 0) || (length.value % 10 > 4) || (length.value <= 9)) {METERS.textContent = "метров"}
    if (length.value % 10 == 1) {METERS.textContent = "метр"}
    if ((length.value % 10 > 1) && (length.value % 10 <= 4)) {METERS.textContent = "метра"}
  }
}
*/

// склоняем окончания метров
function bowMeters(number){
  if (((number > 4) && (number < 20)) || (number % 10 == 0)) {METERS.textContent = "метров"}
  if ((number == 1) || (number % 10 == 1)) {METERS.textContent = "метр"}
  if (((number % 10 > 1) && (number % 10 < 5)) || ((number > 1) && (number < 5))) {METERS.textContent = "метра"}
}


// проверка заполненности полей формы
function checkValue(){
  getPrice();
  if ((length.value != '') && (height.value != '') && (getMaterial() > 199)) {
    BTN_NEXT.disabled = false;
  }
  //getSumNumbers(length.value);
  bowMeters(length.value);
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