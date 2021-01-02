"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositionTocenterElement = exports.addEventToHideAndShowDialog = exports.hideDialogWhenButtonIsActive = exports.showDialogWhenButtonIsActive = exports.hideDialog = exports.calculatesTheValueOfAdimensionToCenterElementFromPercentage = exports.calculatesTheTopValueOfAdimensionToCenterElement = exports.calculatesTheLeftValueOfAdimensionToCenterElement = void 0;

var getPositionTocenterElement = function getPositionTocenterElement(element, window) {
  var elementHeight = element.clientHeight;
  var elementWidth = element.clientWidth;
  var heightOfScreen = window.innerHeight;
  var widthOfScreen = window.innerWidth;
  var top = calculatesTheTopValueOfAdimensionToCenterElement(heightOfScreen, elementHeight);
  var left = calculatesTheLeftValueOfAdimensionToCenterElement(widthOfScreen, elementWidth);
  return [top, left];
};

exports.getPositionTocenterElement = getPositionTocenterElement;

var calculatesTheLeftValueOfAdimensionToCenterElement = function calculatesTheLeftValueOfAdimensionToCenterElement(widthOfSreen, lengthOfWidth) {
  return (widthOfSreen - lengthOfWidth) / 2;
};

exports.calculatesTheLeftValueOfAdimensionToCenterElement = calculatesTheLeftValueOfAdimensionToCenterElement;

var calculatesTheTopValueOfAdimensionToCenterElement = function calculatesTheTopValueOfAdimensionToCenterElement(heightOfSreen, lengthOfHeight) {
  return (heightOfSreen - lengthOfHeight) / 2;
};

exports.calculatesTheTopValueOfAdimensionToCenterElement = calculatesTheTopValueOfAdimensionToCenterElement;

var calculatesTheValueOfAdimensionToCenterElementFromPercentage = function calculatesTheValueOfAdimensionToCenterElementFromPercentage(dimensionOfSreen, lengthOfElementInPercentage) {
  var lengthOfElement = lengthOfElementInPercentage / 100 * dimensionOfSreen;
  return (dimensionOfSreen - lengthOfElement) / 2;
};

exports.calculatesTheValueOfAdimensionToCenterElementFromPercentage = calculatesTheValueOfAdimensionToCenterElementFromPercentage;

var hideDialog = function hideDialog(dialogId) {
  var element = document.getElementById(dialogId);
  element.style.display = "none";
};

exports.hideDialog = hideDialog;

var showDialog = function showDialog(dialogId) {
  var element = document.getElementById(dialogId);
  element.style.display = "";
};

var showDialogWhenButtonIsActive = function showDialogWhenButtonIsActive(buttonId, dialogId) {
  var element = document.getElementById(buttonId);

  element.onclick = function () {
    return showDialog(dialogId);
  };
};

exports.showDialogWhenButtonIsActive = showDialogWhenButtonIsActive;

var hideDialogWhenButtonIsActive = function hideDialogWhenButtonIsActive(buttonId, dialogId) {
  var element = document.getElementById(buttonId);

  element.onclick = function () {
    return hideDialog(dialogId);
  };
};

exports.hideDialogWhenButtonIsActive = hideDialogWhenButtonIsActive;

var addEventToHideAndShowDialog = function addEventToHideAndShowDialog(hideButtonId, showButtonId, dialogId) {
  if (hideButtonId) {
    hideDialogWhenButtonIsActive(hideButtonId, dialogId);
  }

  if (showButtonId) {
    hideDialog(dialogId);
    showDialogWhenButtonIsActive(showButtonId, dialogId);
  }
};

exports.addEventToHideAndShowDialog = addEventToHideAndShowDialog;