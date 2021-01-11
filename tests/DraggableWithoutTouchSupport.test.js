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


