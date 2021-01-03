

const getPositionTocenterElement = (element, window) => {
  let elementHeight = element.clientHeight
  let elementWidth  = element.clientWidth
  let heightOfScreen = window.innerHeight
  let widthOfScreen = window.innerWidth
  let top = calculatesTheTopValueOfAdimensionToCenterElement(
    heightOfScreen, elementHeight)
  let left = calculatesTheLeftValueOfAdimensionToCenterElement(
    widthOfScreen, elementWidth)


  return [top, left]
}


const calculatesTheLeftValueOfAdimensionToCenterElement =
  (widthOfSreen, lengthOfWidth) => 
    (widthOfSreen - lengthOfWidth) / 2 


const calculatesTheTopValueOfAdimensionToCenterElement = 
  (heightOfSreen, lengthOfHeight) => 
    (heightOfSreen - lengthOfHeight) / 2


const calculatesTheValueOfAdimensionToCenterElementFromPercentage = 
  (dimensionOfSreen, lengthOfElementInPercentage) => {
  let lengthOfElement = 
      (lengthOfElementInPercentage / 100 ) * dimensionOfSreen
  return (dimensionOfSreen - lengthOfElement) / 2 
} 


const hideDialog = dialogId => {
  let element = document.getElementById(dialogId)
  element.style.display = "none"
}


const showDialog = dialogId => {
  let element = document.getElementById(dialogId)
  element.style.display = ""
}


const showDialogWhenButtonIsActive = (buttonId, dialogId) => {
  let element = document.getElementById(buttonId)
  element.onclick = () => showDialog(dialogId)
}


const hideDialogWhenButtonIsActive = (buttonId, dialogId) => {
  let element = document.getElementById(buttonId)
  element.onclick = () => hideDialog(dialogId)
}


const addEventToHideAndShowDialog = (
  hideButtonId, showButtonId, dialogId) => {
  if (hideButtonId) {
    hideDialogWhenButtonIsActive(hideButtonId, dialogId)
  }
  if (showButtonId) {
    hideDialog(dialogId)
    showDialogWhenButtonIsActive(showButtonId, dialogId)
  }
}


export {
  calculatesTheLeftValueOfAdimensionToCenterElement,
  calculatesTheTopValueOfAdimensionToCenterElement,
  calculatesTheValueOfAdimensionToCenterElementFromPercentage,
  hideDialog,
  showDialogWhenButtonIsActive,
  hideDialogWhenButtonIsActive,
  addEventToHideAndShowDialog,
  getPositionTocenterElement
}


