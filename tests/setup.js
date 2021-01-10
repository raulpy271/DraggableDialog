

document.body.innerHTML = `
  <div id="dialog">
    <p>Hello</p>
    <div id="close-button">
      <p>Close</p>
    </div>
  </div>
  <div id="start-button">
  </div>
`


export const eventFire = (el, etype) => {
  let evObj = new Event(etype)
  el.dispatchEvent(evObj)
}




export var dialog       = document.getElementById("dialog")
export var close_button = document.getElementById("close-button")
export var start_button = document.getElementById("start-button")


