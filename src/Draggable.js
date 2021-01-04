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
    this.elementThatCaptureThatClick.ontouchstart = this.touch
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
    window.ontouchmove = this.updatePositionWhenHoldTouch
    window.ontouchend  = this.endTouch
    this.updateLastTouch(touch)
  }


  endTouch = () => {
    window.ontouchmove = null
    window.ontouchend  = null
  }
}


export default Draggable
