import {eventFire, moveTenPixelUp, dialog, title} from "./setup.js"

import Draggable from '../src/DraggableWithoutTouchSupport.js'


test("Testing parameters", () => {
  let draggable = new Draggable({
    "dialogId" : "dialog",
    "elementThatCaptureTheClick" : "title"
  })


  expect(draggable.dialog).toEqual(dialog)
  expect(draggable.elementThatCaptureTheClick).toEqual(title)
})


test("Movement dialog", () => {
  let draggable = new Draggable({
    "dialogId" : "dialog",
    "elementThatCaptureTheClick" : "title"
  })


  let topInitialPosition = draggable.top
  let leftInitialPosition = draggable.left


  moveTenPixelUp(title)


  expect(draggable.top).toBe(topInitialPosition - 10)
  expect(draggable.left).toBe(leftInitialPosition)
  expect(String(draggable.top ) + "px").toBe(draggable.dialog.style.top)
  expect(String(draggable.left) + "px").toBe(draggable.dialog.style.left)
})


