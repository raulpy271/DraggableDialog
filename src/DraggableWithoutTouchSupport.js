import {
  getPositionTocenterElement,
  addEventToHideAndShowDialog
  } from './utils.js'


class DraggableWithoutTouchSupport {


  constructor({ 
    dialogId,
    elementThatCaptureTheClick,
    showButtonId,
    hideButtonId,
    centerElement
  }) {
    this.top = 0
    this.left = 0
    this.dialog = document.getElementById(dialogId)
    this.elementThatCaptureTheClick =
      document.getElementById(elementThatCaptureTheClick)


    if (centerElement) {
      this.centerDialog()
    }
    this.elementThatCaptureTheClick.addEventListener("mousedown", this.click)
    addEventToHideAndShowDialog(hideButtonId, showButtonId, dialogId)
  }


  centerDialog = () => {
    let [top, left] = getPositionTocenterElement(this.dialog, window)
    this.top = top
    this.left = left
    this.updatePosition(0, 0)
  }

  updatePosition = (movementX, movementY) => {
    this.top  = this.top  + movementY
    this.left = this.left + movementX
    this.dialog.style.top  = String(this.top)  + "px"
    this.dialog.style.left = String(this.left) + "px"
  }


  updatePositionWhenHoldClick = clickEvent => {
    this.updatePosition(clickEvent.movementX, clickEvent.movementY)
  }


  click = mouseEvent => {
    window.addEventListener("mousemove", this.updatePositionWhenHoldClick)
    window.addEventListener("mouseup", this.endClick)
  }


  endClick = () => {
    window.removeEventListener("mousemove", this.updatePositionWhenHoldClick)
    window.removeEventListener("mouseup", this.endClick)
  }
}


export default DraggableWithoutTouchSupport
