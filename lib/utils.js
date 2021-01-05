(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.utils = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getPositionTocenterElement = _exports.addEventToHideAndShowDialog = _exports.hideDialogWhenButtonIsActive = _exports.showDialogWhenButtonIsActive = _exports.hideDialog = _exports.calculatesTheValueOfAdimensionToCenterElementFromPercentage = _exports.calculatesTheTopValueOfAdimensionToCenterElement = _exports.calculatesTheLeftValueOfAdimensionToCenterElement = void 0;

  var getPositionTocenterElement = function getPositionTocenterElement(element, window) {
    var elementHeight = element.clientHeight;
    var elementWidth = element.clientWidth;
    var heightOfScreen = window.innerHeight;
    var widthOfScreen = window.innerWidth;
    var top = calculatesTheTopValueOfAdimensionToCenterElement(heightOfScreen, elementHeight);
    var left = calculatesTheLeftValueOfAdimensionToCenterElement(widthOfScreen, elementWidth);
    return [top, left];
  };

  _exports.getPositionTocenterElement = getPositionTocenterElement;

  var calculatesTheLeftValueOfAdimensionToCenterElement = function calculatesTheLeftValueOfAdimensionToCenterElement(widthOfSreen, lengthOfWidth) {
    return (widthOfSreen - lengthOfWidth) / 2;
  };

  _exports.calculatesTheLeftValueOfAdimensionToCenterElement = calculatesTheLeftValueOfAdimensionToCenterElement;

  var calculatesTheTopValueOfAdimensionToCenterElement = function calculatesTheTopValueOfAdimensionToCenterElement(heightOfSreen, lengthOfHeight) {
    return (heightOfSreen - lengthOfHeight) / 2;
  };

  _exports.calculatesTheTopValueOfAdimensionToCenterElement = calculatesTheTopValueOfAdimensionToCenterElement;

  var calculatesTheValueOfAdimensionToCenterElementFromPercentage = function calculatesTheValueOfAdimensionToCenterElementFromPercentage(dimensionOfSreen, lengthOfElementInPercentage) {
    var lengthOfElement = lengthOfElementInPercentage / 100 * dimensionOfSreen;
    return (dimensionOfSreen - lengthOfElement) / 2;
  };

  _exports.calculatesTheValueOfAdimensionToCenterElementFromPercentage = calculatesTheValueOfAdimensionToCenterElementFromPercentage;

  var hideDialog = function hideDialog(dialogId) {
    var element = document.getElementById(dialogId);
    element.style.display = "none";
  };

  _exports.hideDialog = hideDialog;

  var showDialog = function showDialog(dialogId) {
    var element = document.getElementById(dialogId);
    element.style.display = "";
  };

  var showDialogWhenButtonIsActive = function showDialogWhenButtonIsActive(buttonId, dialogId) {
    var element = document.getElementById(buttonId);
    element.addEventListener("click", function () {
      return showDialog(dialogId);
    });
  };

  _exports.showDialogWhenButtonIsActive = showDialogWhenButtonIsActive;

  var hideDialogWhenButtonIsActive = function hideDialogWhenButtonIsActive(buttonId, dialogId) {
    var element = document.getElementById(buttonId);
    element.addEventListener("click", function () {
      return hideDialog(dialogId);
    });
  };

  _exports.hideDialogWhenButtonIsActive = hideDialogWhenButtonIsActive;

  var addEventToHideAndShowDialog = function addEventToHideAndShowDialog(hideButtonId, showButtonId, dialogId) {
    if (hideButtonId) {
      hideDialogWhenButtonIsActive(hideButtonId, dialogId);
    }

    if (showButtonId) {
      hideDialog(dialogId);
      showDialogWhenButtonIsActive(showButtonId, dialogId);
    }
  };

  _exports.addEventToHideAndShowDialog = addEventToHideAndShowDialog;
});