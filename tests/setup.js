

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


export const eventFire = (element, type) => {
  let evObj = new Event(type)
  element.dispatchEvent(evObj)
}


export const moveTenPixelUp = element => {
  let evObj = new Event("mousedown")
  element.dispatchEvent(evObj)
  evObj = new Event("mousemove")
  evObj.movementX = 0
  evObj.movementY = -10
  window.dispatchEvent(evObj)
  evObj = new Event("mouseup")
  window.dispatchEvent(evObj)
}


export var dialog       = document.getElementById("dialog")
export var title        = document.getElementById("title")
export var close_button = document.getElementById("close-button")
export var start_button = document.getElementById("start-button")


