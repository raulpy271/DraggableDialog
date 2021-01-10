import {eventFire, dialog, start_button, close_button} from "./setup.js"

import {getPositionTocenterElement,
  addEventToHideAndShowDialog
  } from '../src/utils.js'


test("Function to center elements", () => {
  let elementFake = {}
  window.innerWidth  = 100
  window.innerHeight = 100
  elementFake.clientHeight = 20
  elementFake.clientWidth  = 20
  expect(getPositionTocenterElement(elementFake, window)).toEqual([40, 40])
})


test("Events to show and hide element", () => {
  expect(dialog.style.display).toBe("")
  addEventToHideAndShowDialog("close-button", "start-button", "dialog")
  expect(dialog.style.display).toBe("none")

  
  eventFire(start_button, "click")
  expect(dialog.style.display).toBe("")


  eventFire(close_button, "click")
  expect(dialog.style.display).toBe("none")
})


