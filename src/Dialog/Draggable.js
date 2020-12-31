import {
  calculatesTheLeftValueOfAdimensionToCenterElement,
  calculatesTheTopValueOfAdimensionToCenterElement,
  addEventToHideAndShowDialog
  } from '../utils.js'


class Draggable {
  constructor({ dialogId,
    elementThatCaptureThatClickId,
    showButtonId,
    hideButtonId
  }) {
    this.dialog = document.getElementById(dialogId)
    this.clickableElement = 
      document.getElementById(elementThatCaptureThatClickId)
    this.clickableElement.onmousedown = this.click
    this.top = 0
    this.left = 0
    this.centerElement()
  }


  centerElement = () => {
    let elementHeight = this.dialog.clientHeight
    let elementWidth  = this.dialog.clientWidth
    let heightOfScreen = window.innerHeight
    let widthOfScreen = window.innerWidth
    this.top = calculatesTheTopValueOfAdimensionToCenterElement(
      heightOfScreen, elementHeight)
    this.left = calculatesTheLeftValueOfAdimensionToCenterElement(
      widthOfScreen, elementWidth)
    this.updatePosition(0, 0)
  }


  updatePosition = (movementX, movementY) => {
    this.top  = this.top  + movementY
    this.left = this.left + movementX
    this.dialog.style.top  = String(this.top)  + "px"
    this.dialog.style.left = String(this.left) + "px"
  }


  updatePositionWhenHoldClick = clickEvent => {
    console.log(2)
    this.updatePosition(clickEvent.movementX, clickEvent.movementY)
  }


  click = mouseEvent => {
    console.log(1)
    window.onmousemove = this.updatePositionWhenHoldClick 
    window.onmouseup = this.endClick
  }


  endClick = () => {
    console.log(3)
    window.onmousemove = null
    window.onmouseup   = null
  }
}


export default Draggable
