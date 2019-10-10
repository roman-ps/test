'use strict';

import {getStoreItem} from "./store-item2.js";
import {calcPriceCheckBtnNext, switchBtnNext, renderPrice, renderFormScreen} from "./main.js";

const store = {}
store.inputLength = getStoreItem({
  name: 'inputLength',
  value: 0,
  setterHook: calcPriceCheckBtnNext,
});

store.inputHeight = getStoreItem({
  name: 'inputHeight',
  value: 0,
  setterHook: calcPriceCheckBtnNext,
});

store.borderArea = getStoreItem({
  name: 'borderArea',
  value: 0,
  setterHook: renderPrice,
});

store.selectedMaterial = getStoreItem({
  name: 'selectedMaterial',
  value: 'choose',
  setterHook: calcPriceCheckBtnNext,
});

store.checkboxInstalling = getStoreItem({
  name: 'checkboxInstalling',
  value: '',
  setterHook: calcPriceCheckBtnNext,
});

store.submitDisabled = getStoreItem({
  name: 'submitDisabled',
  value: 0,
  setterHook: switchBtnNext,
});

store.switchFormScreens = getStoreItem({
  name: 'switchFormScreens',
  value: 0,
  setterHook: renderFormScreen,
})

export {store}