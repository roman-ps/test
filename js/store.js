'use strict';
if (!window.app) window.app = {};
window.app.store = (function(){
  const store = {}
  const storeData = [
    {
      name: 'inputLength',
      value: 0,
      //setterHook: calcPriceCheckBtnNext,
    },
    {
      name: 'inputHeight',
      value: 0,
      //setterHook: calcPriceCheckBtnNext,
    },
    {
      name: 'borderArea',
      value: 0,
      //setterHook: renderPrice,
    },
    {
      name: 'selectedMaterial',
      value: 'choose',
      //setterHook: calcPriceCheckBtnNext,
    },
    {
      name: 'checkboxInstalling',
      value: '',
      //setterHook: calcPriceCheckBtnNext,
    },
    {
      name: 'submitDisabled',
      value: 0,
      //setterHook: switchBtnNext,
    },
    {
      name: 'switchFormScreens',
      value: 0,
      //setterHook: renderFormScreen,
    }
  ]
  
  for (let i = 0; i < storeData.length; i++){
    let current = storeData[i].name;
    store.current = window.app.lib.getStoreItem(storeData[i]);
  }
/*  
  store.inputLength = window.app.lib.getStoreItem({
    name: 'inputLength',
    value: 0,
    setterHook: calcPriceCheckBtnNext,
  });

  store.inputHeight = window.app.lib.getStoreItem({
    name: 'inputHeight',
    value: 0,
    setterHook: calcPriceCheckBtnNext,
  });

  store.borderArea = window.app.lib.getStoreItem({
    name: 'borderArea',
    value: 0,
    setterHook: renderPrice,
  });

  store.selectedMaterial = window.app.lib.getStoreItem({
    name: 'selectedMaterial',
    value: 'choose',
    setterHook: calcPriceCheckBtnNext,
  });

  store.checkboxInstalling = window.app.lib.getStoreItem({
    name: 'checkboxInstalling',
    value: '',
    setterHook: calcPriceCheckBtnNext,
  });

  store.submitDisabled = window.app.lib.getStoreItem({
    name: 'submitDisabled',
    value: 0,
    setterHook: switchBtnNext,
  });

  store.switchFormScreens = window.app.lib.getStoreItem({
    name: 'switchFormScreens',
    value: 0,
    setterHook: renderFormScreen,
  })*/
})()