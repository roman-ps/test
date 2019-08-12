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
const INPUT_CONTAINER_SECOND = CONTAINER_SECOND.querySelectorAll(".item__input");
const MATERIALS = {
  "decking": 400,
  "modules": 500,
  "concrete": 700,
  "grid": 200,
  "choose": 0
};

// определение цены на материал
const getPriceByValue = function(value) {
  return MATERIALS[value] || MATERIALS.choose;
} 

let length = document.querySelector("#length");
let height = document.querySelector("#height");
let material = document.querySelector("#material");
let checkbox = document.querySelector("#checkbox");
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let phone = document.querySelector("#phone");

length.addEventListener("change", checkValue);
height.addEventListener("change", checkValue);
material.addEventListener("change", checkValue);
checkbox.addEventListener("change", checkValue);
//INPUT_CONTAINER_SECOND.addEventListener("change", checkSecondValue);
name.addEventListener("change", checkSecondValue);
mail.addEventListener("change", checkSecondValue);
phone.addEventListener("change", checkSecondValue);
BTN_NEXT.addEventListener("click", changeFirstForm);
BTN_SUBMIT.addEventListener("click", changeSecondForm);
BTN_PREV.addEventListener("click", openFirstForm);
BTN_CLOSE.addEventListener("click", closePopup);

// склоняем окончания метров
function bowMeters(number){
  if (number % 10 == 1 && number % 100 != 11) {METERS.textContent = "метр"} 
  else 
  if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {METERS.textContent = "метра"}
  else {METERS.textContent = "метров"}
}

// проверка заполненности полей формы
function checkValue(){
  getPrice();
  if ((length.value != '') && (height.value != '') && (getPriceByValue(material.value) > 199)) {
    BTN_NEXT.disabled = false;
  }
  bowMeters(length.value);
}

// проверка заполненности полей 2 части формы
function checkSecondValue(){
  if ((name.value != '') && (mail.value != '') && (phone.value != '')) {
    BTN_SUBMIT.disabled = false;
  }
}

// вычисляем сумму заказа
function getPrice(){
  if (checkbox.checked) {
    PRICE.textContent = (length.value * height.value) * (getPriceByValue(material.value) + 200);
  }
  else {
    PRICE.textContent = (length.value * height.value) * getPriceByValue(material.value);
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