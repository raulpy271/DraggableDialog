import {moveTenPixelUpWithTouch, title} from "./setup.js"

import Draggable from '../src/Draggable.js'


test("Movement dialog with touch", () => {
  let draggable = new Draggable({
    "dialogId" : "dialog",
    "elementThatCaptureTheClick" : "title"
  })


  let topInitialPosition = draggable.top
  let leftInitialPosition = draggable.left


  moveTenPixelUpWithTouch(title)


  expect(draggable.top).toBe(topInitialPosition - 10)
  expect(draggable.left).toBe(leftInitialPosition)
  expect(String(draggable.top ) + "px").toBe(draggable.dialog.style.top)
  expect(String(draggable.left) + "px").toBe(draggable.dialog.style.left)
})


