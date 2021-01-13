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


test("Center element", () => {
  window.innerWidth  = 100
  window.innerHeight = 100


  expect(dialog.style.top ).toBe("")
  expect(dialog.style.left).toBe("")


  let draggable = new Draggable({
    "dialogId" : "dialog",
    "elementThatCaptureTheClick" : "title",
    "centerElement" : true
  })


  expect(dialog.clientHeight).toBe(0)
  expect(dialog.clientWidth).toBe(0)
  expect(dialog.style.top).toBe("50px")
  expect(dialog.style.left).toBe("50px")
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


