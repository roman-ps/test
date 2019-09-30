'use strict';
if (!window.app) window.app = {};
window.app.lib = (function(){ 
  class StoreItem {
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
  
  const getStoreItem = config => new StoreItem(config);
  return {
    getStoreItem
  }
})()