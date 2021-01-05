import DraggableWithoutTouchSupport from './DraggableWithoutTouchSupport.js'


class Draggable extends DraggableWithoutTouchSupport {


  constructor({ 
    dialogId,
    elementThatCaptureTheClick,
    showButtonId,
    hideButtonId,
    centerElement = false
  }) {
    super({
      dialogId,
      elementThatCaptureTheClick,
      showButtonId,
      hideButtonId,
      centerElement
    })


    this.lastTouchX = 0
    this.lastTouchY = 0
    this.elementThatCaptureTheClick.addEventListener("touchstart", this.touch)
  }


  updateLastTouch = touch => {
    this.lastTouchX = touch.clientX
    this.lastTouchY = touch.clientY
  }


  updatePositionWhenHoldTouch = touchEvent => {
    if (touchEvent.touches.length === 1 ) {
      let touch = touchEvent.touches[0]
      let movementX = touch.clientX - this.lastTouchX
      let movementY = touch.clientY - this.lastTouchY
      this.updatePosition(movementX, movementY)
      this.updateLastTouch(touch)
    }
  }


  touch = touchEvent => {
    let touch = touchEvent.touches[0]
    window.addEventListener("touchmove", this.updatePositionWhenHoldTouch)
    window.addEventListener("touchend", this.endTouch)
    this.updateLastTouch(touch)
  }


  endTouch = () => {
    window.removeEventListener("touchmove", this.updatePositionWhenHoldTouch)
    window.removeEventListener("touchend", this.endTouch)
  }
}


export default Draggable
