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
const INSTALLATION = 200;
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
let outputData = document.querySelector(".item__output");
let lengthValue = length.value;
let heightValue = height.value;
let materialValue = material.value;
let outputText = `Вы укомплектовали забор длинной ${lengthValue} метров и высотой ${heightValue} метра из материала ${materialValue} на сумму ${getPrice(lengthValue, heightValue, getPrice(lengthValue, heightValue, getPriceByValue(material.value)))} &#8381;`;
let store = {
  "inputLength": 0,
  set lengthOrder(length) {
    this.inputLength = length;
  },
  get lengthOrder() {
    return this.inputLength;
  },
  "inputHeight": 0,
  set heightOrder(height) {
    this.inputHeight = height;
  },
  get heightOrder() {
    return this.inputHeight;
  },
  "selectMaterial": "choose",
  set materialOrder(material) {
    this.selectMaterial = material;
  },
  get materialOrder() {
    return this.selectMaterial;
  },
  "checkboxInstalling": false,
  "price": 0,
  "inputName": "",
  "inputMail": "",
  "inputPhone": ""
}

//length.addEventListener("change", checkValue);
//height.addEventListener("change", checkValue);
//checkbox.addEventListener("change", checkValue);
//material.addEventListener("change", checkValue);
material.addEventListener("change", checkMaterial);
checkbox.addEventListener("change", checkInstalling);
height.addEventListener("change", checkHeight);
length.addEventListener("change", checkLength);
//INPUT_CONTAINER_SECOND.addEventListener("change", checkSecondValue);
name.addEventListener("change", checkSecondValue);
mail.addEventListener("change", checkSecondValue);
phone.addEventListener("change", checkSecondValue);
BTN_NEXT.addEventListener("click", changeFirstForm);
BTN_SUBMIT.addEventListener("click", changeSecondForm);
BTN_PREV.addEventListener("click", openFirstForm);
BTN_CLOSE.addEventListener("click", closePopup);

// вычисляем нужное окончание слова
function bowMeters(number, one, two, five){
  if (number % 10 == 1 && number % 100 != 11) {
    return one
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return two
  } else {
    return five
  };
}

// проверка заполненности полей формы
function checkValue(){
  METERS.textContent = bowMeters(length.value, "метр", "метра", "метров");
  PRICE.textContent = getPrice(length.value, height.value, getPriceByValue(material.value));
  if ((length.value != '') && (height.value != '') && (getPriceByValue(material.value) > 199)) {
    BTN_NEXT.disabled = false;
  }
}

function checkLength(evt) {
  evt.preventDefault;
  let item = evt.currentTarget;
  store.lengthOrder = item.value;
}

function checkHeight(evt) {
  evt.preventDefault;
  let item = evt.currentTarget;
  store.inputHeight = item.value;
}

function checkMaterial(evt) {
  evt.preventDefault;
  let item = evt.currentTarget;
  store.selectMaterial = item.value;
  console.log(item.value);
}

function checkInstalling(evt) {
  evt.preventDefault;
  //let item = evt.currentTarget;
  //if (checkbox.checked == true) {
  //  item = !item.value;
  //}
  store.checkboxInstalling = !store.checkboxInstalling;
  console.log(store);
}

// проверка заполненности полей 2 части формы
function checkSecondValue(){
  if ((name.value != '') && (mail.value != '') && (phone.value != '')) {
    BTN_SUBMIT.disabled = false;
    outputData.classList.toggle("hidden");
    outputData.innerHTML = outputText;
  }
}

// вычисляем сумму заказа
function getPrice(length, height, getPrice){
  if (checkbox.checked) {
    return ((length * height) * (getPrice + INSTALLATION));
  }
  else {
    return (length * height * getPrice);
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