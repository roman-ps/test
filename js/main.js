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
const INSTALLATION_PRICE = 200;
let length = document.querySelector("#length");
let height = document.querySelector("#height");
let material = document.querySelector("#material");
let checkbox = document.querySelector("#checkbox");
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let phone = document.querySelector("#phone");
let outputData = document.querySelector(".item__output");
let outputText = `Вы укомплектовали забор длинной ${4} метров и высотой ${3} метра из материала ${3} на сумму ${4} &#8381;`;
const store = {}

const MATERIALS = {
  decking: {name: 'Профнастил', price: 400},
  modules: {name: 'Модуль', price: 500},
  concrete: {name: 'Бетон', price: 700},
  grid: {name: 'Сетка', price: 200},
};

// присваиваем в стор значение value 
const getValueChangeHandler = (fieldName) => (evt) => {
  evt.preventDefault;
  store[fieldName].value = evt.currentTarget.value;
};

function checkBtn(){
  BTN_NEXT.disabled = !store.submitDisabled.value;
}

// присваиваем в стор значение чекбокса
const checkInstalling = (fieldName) => (evt) => {
  evt.preventDefault;
  store[fieldName].value = Number(evt.currentTarget.checked);
}


// вычисление суммы заказа
const calcArea = () => {
  store.borderArea.value = store.inputLength.value * store.inputHeight.value * calcPrice();
  store.submitDisabled.value = (store.inputLength.value > 0 && store.inputHeight.value > 0 && store.selectedMaterial.value != 'choose');
};

// возвращаем цену за материал и монтаж
function calcPrice(){
  return (((MATERIALS[store.selectedMaterial.value] || {}).price || 0) + (store.checkboxInstalling.value * INSTALLATION_PRICE));
}

// вывод суммы заказа
const renderPrice = () => {
  PRICE.textContent = store.borderArea.value;
}

class Input {
  constructor({value, name, getterHook, setterHook}) {
    this._value = value;
    this._name = name;
    this._getterHook = getterHook;
    this._setterHook = setterHook;
  }
  
  get value() {
    return this._value;
  }
  
  set value(value) {
    this._value = value;
    if (typeof this._setterHook === 'function') {
      this._setterHook({
        name: this._name, 
        value: this._value,
      });
    }
  }
  
  get name() {
    return this._name;
  }
  
  set name(name) {
    this._name = name;
  }
  
  get getterHook() {
    return this._getterHook;
  }
  
  set getterHook(getterHook) {
    this._getterHook = getterHook;
  }
  
  get setterHook() {
    return this._setterHook;
  }
  
  set setterHook(setterHook) {
    this._setterHook = setterHook;
  }
}

store.inputLength = new Input({
  name: 'inputLength',
  value: 0,
  setterHook: calcArea,
});

store.inputHeight = new Input({
  name: 'inputHeight',
  value: 0,
  setterHook: calcArea,
});

store.borderArea = new Input({
  name: 'borderArea',
  value: 0,
  setterHook: renderPrice,
});

store.selectedMaterial = new Input({
  name: 'selectedMaterial',
  value: 'choose',
  setterHook: calcArea,
});

store.checkboxInstalling = new Input({
  name: 'checkboxInstalling',
  value: '',
  setterHook: calcArea,
});

store.submitDisabled = new Input({
  name: 'submitDisabled',
  value: 0,
  setterHook: checkBtn,
});


material.addEventListener("change", getValueChangeHandler('selectedMaterial'));
checkbox.addEventListener("change", checkInstalling('checkboxInstalling'));
height.addEventListener("change", getValueChangeHandler('inputHeight'));
length.addEventListener("change", getValueChangeHandler('inputLength'));

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
