

const calculatesTheValueOfAdimensionToCenterElement = 
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
  calculatesTheValueOfAdimensionToCenterElement,
  hideDialog,
  showDialogWhenButtonIsActive,
  hideDialogWhenButtonIsActive,
  addEventToHideAndShowDialog
}


