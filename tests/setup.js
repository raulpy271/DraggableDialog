

document.body.innerHTML = `
  <p id="title">Hello</p>
  <div id="dialog">
  </div>
  <div id="close-button">
    <p>Close</p>
  </div>
  <div id="start-button">
  </div>
`


const touchEventFactory = (clientX, clientY, touchType) => {
  let touchEvent = new Event(touchType)
  touchEvent.touches = [{
    "clientX" : clientX,
    "clientY" : clientY
  }]
  return touchEvent
}


export const eventFire = (element, type) => {
  let evObj = new Event(type)
  element.dispatchEvent(evObj)
}


export const moveTenPixelUp = element => {
  eventFire(element, "mousedown")


  let mouseMove = new Event("mousemove")
  mouseMove.movementX = 0
  mouseMove.movementY = -10
  window.dispatchEvent(mouseMove)


  eventFire(window, "mouseup")
}


export const moveTenPixelUpWithTouch = element => {
  let touchStart = touchEventFactory(0, 0, "touchstart")
  element.dispatchEvent(touchStart)


  let touchMove = touchEventFactory(0, -10, "touchmove")
  window.dispatchEvent(touchMove)


  let touchEnd = touchEventFactory(0, 0, "touchend")
  window.dispatchEvent(touchEnd)
}


export const dialog       = document.getElementById("dialog")
export const title        = document.getElementById("title")
export const close_button = document.getElementById("close-button")
export const start_button = document.getElementById("start-button")


