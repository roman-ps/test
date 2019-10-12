'use strict';

import {addStoreItem} from "./store-item2.js";
import {calcPriceCheckBtnNext, switchBtnNext, renderPrice, renderFormScreen} from "./main.js";

const store = {}
store.inputLength = addStoreItem({
  name: 'inputLength',
  value: 0,
  setterHook: calcPriceCheckBtnNext,
});

store.inputHeight = addStoreItem({
  name: 'inputHeight',
  value: 0,
  setterHook: calcPriceCheckBtnNext,
});

store.borderArea = addStoreItem({
  name: 'borderArea',
  value: 0,
  setterHook: renderPrice,
});

store.selectedMaterial = addStoreItem({
  name: 'selectedMaterial',
  value: 'choose',
  setterHook: calcPriceCheckBtnNext,
});

store.checkboxInstalling = addStoreItem({
  name: 'checkboxInstalling',
  value: '',
  setterHook: calcPriceCheckBtnNext,
});

store.submitDisabled = addStoreItem({
  name: 'submitDisabled',
  value: 0,
  setterHook: switchBtnNext,
});

store.switchFormScreens = addStoreItem({
  name: 'switchFormScreens',
  value: 0,
  setterHook: renderFormScreen,
})

export {store}