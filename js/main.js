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

// присваиваем в стор значение чекбокса
function checkInstalling(evt) {
  evt.preventDefault;
  store.checkboxInstalling.value = Number(INSTALL.checked);
}


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

// вычисление суммы заказа
const calcArea = () => {
  store.borderArea.value = store.inputLength.value * store.inputHeight.value * (((MATERIALS[store.chooseMaterial.value] || {}).price || 0) + (store.checkboxInstalling.value == 1 ? INSTALLATION : 0));
};

// вывод суммы заказа
const SetPriceOrder = () => {
  PRICE.textContent = store.borderArea.value;
}

class Input {
  constructor({value, name, getCb, setCb}) {
    this._value = value;
    this._name = name;
    this._getCb = getCb;
    this._setCb = setCb;
  }
  
  get value() {
    return this._value;
  }
  
  set value(value) {
    this._value = value;
    if (typeof this._setCb === 'function') {
      this._setCb({
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
  
  get getCb() {
    return this._getCb;
  }
  
  set getCb(getCb) {
    this._getCb = getCb;
  }
  
  get setCb() {
    return this._setCb;
  }
  
  set setCb(setCb) {
    this._setCb = setCb;
  }
}

store.inputLength = new Input({
  name: 'inputLength',
  value: 0,
  setCb: calcArea,
});

store.inputHeight = new Input({
  name: 'inputHeight',
  value: 0,
  setCb: calcArea,
});

store.borderArea = new Input({
  name: 'borderArea',
  value: 0,
  setCb: SetPriceOrder,
});

store.chooseMaterial = new Input({
  name: 'chooseMaterial',
  value: 0,
  setCb: calcArea,
});

store.checkboxInstalling = new Input({
  name: 'checkboxInstalling',
  value: '',
  setCb: calcArea,
});


material.addEventListener("change", getValueChangeHandler('chooseMaterial'));
checkbox.addEventListener("change", checkInstalling);
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
