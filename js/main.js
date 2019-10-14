'use strict';

import {addStoreItem} from "./store-item2.js";
import {setStoreItem, getStoreItem} from "./store.js";

const BTN_NEXT = document.querySelector(".btn--next");
const BTN_PREV = document.querySelector(".btn--prev");
const BTN_SUBMIT = document.querySelector(".btn--submit");
const BTN_CLOSE = document.querySelector(".btn--close");
const CONTAINER_FIRST = document.querySelector(".container--first");
const CONTAINER_SECOND = document.querySelector(".container--second");
const POPUP = document.querySelector(".popup");
const PRICE = document.querySelector(".price--red");
const METERS = document.querySelector(".item__measure");
const INPUT_LENGTH = document.querySelector("#length");
const INPUT_HEIGHT = document.querySelector("#height");
const SELECT_MATERIAL = document.querySelector("#material");
const CHECKBOX_INSTALL = document.querySelector("#checkbox");
const INPUT_NAME = document.querySelector("#name");
const INPUT_MAIL = document.querySelector("#mail");
const INPUT_PHONE = document.querySelector("#phone");
const OUTPUT_FIELD = document.querySelector(".output");
let outputText = `Вы укомплектовали забор длинной ${4} метров и высотой ${3} метра из материала ${3} на сумму ${4} &#8381;`;
const INSTALLATION_PRICE = 200;
const SELECTORS = {
  form: '.form',
  btnNext: '.btn--next',
  btnPrev: '.btn--prev',
  btnSubmit: '.btn--submit',
  btnClose: '.btn--close',
  containerFirst: '.container--first',
  containerSecond: '.container--second',
  popup: '.popup',
  price: '.price--red',
  meters: '.item__measure',
  inputLength: '.input__length',
  inputHeight: '.input__height',
  selectMaterial: '.material',
  checkboxInstall: '.install',
  inputName: '.input__name',
  inputMail: '.input__mail',
  inputPhone: '.input__phone',
  outputField: '.output',
}

const NODES = {}

function transferToNodes(){
  let key = Object.keys(SELECTORS);
  for (let i = 0; i < key.length; i++){
    NODES[key[i]] = document.querySelector(SELECTORS[key[i]]);
  }
}

const MATERIALS = {
  decking: {name: 'Профнастил', price: 400},
  modules: {name: 'Модуль', price: 500},
  concrete: {name: 'Бетон', price: 700},
  grid: {name: 'Сетка', price: 200},
};

// присваиваем в стор значение value 
const getValueChangeHandler = (fieldName) => (evt) => {
  evt.preventDefault;
  setStoreItem([fieldName]).value = evt.currentTarget.value;
};

// меняем состояние кнопки ДАЛЕЕ
function switchBtnNext(){
  BTN_NEXT.disabled = !store.submitDisabled.value;
}

// присваиваем в стор значение чекбокса
const checkInstalling = (fieldName) => (evt) => {
  evt.preventDefault;
  setStoreItem([fieldName]).value = Number(evt.currentTarget.checked);
}

// вычисление суммы заказа
const calcPriceCheckBtnNext = () => {
  store.borderArea.value = store.inputLength.value * store.inputHeight.value * calcMaterials();
  store.submitDisabled.value = (store.inputLength.value > 0 && store.inputHeight.value > 0 && store.selectedMaterial.value != 'choose');
  console.log(store);
};

// возвращаем цену за материал и монтаж
function calcMaterials(){
  return (((MATERIALS[getStoreItem(selectedMaterial).value] || {}).price || 0) + (getStoreItem(checkboxInstalling).value * INSTALLATION_PRICE));
}

// вывод суммы заказа
const renderPrice = () => {
  PRICE.textContent = getStoreItem(borderArea).value;
}

let changeValueFormScreens = value => () => getStoreItem(switchFormScreens).value += value;
const handlePrevScreen = changeValueFormScreens(-1);
const handleNextScreen = changeValueFormScreens(1);

INPUT_LENGTH.addEventListener("change", getValueChangeHandler('inputLength'));
//NODES.popup.addEventListener("change", getValueChangeHandler('inputLength'));
INPUT_HEIGHT.addEventListener("change", getValueChangeHandler('inputHeight'));
SELECT_MATERIAL.addEventListener("change", getValueChangeHandler('selectedMaterial'));
CHECKBOX_INSTALL.addEventListener("change", checkInstalling('checkboxInstalling'));
BTN_PREV.addEventListener("click", handlePrevScreen);
BTN_NEXT.addEventListener("click", handleNextScreen);
document.addEventListener("DOMContentLoaded", transferToNodes);

function renderFormScreen(){
  CONTAINER_FIRST.classList.toggle("hidden");
  CONTAINER_SECOND.classList.toggle("hidden");
}

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

export {calcPriceCheckBtnNext, switchBtnNext, renderPrice, renderFormScreen}