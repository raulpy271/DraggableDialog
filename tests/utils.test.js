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
  let dialogFake = document.getElementById("dialog")
  let hideButton = document.getElementById("hide")
  let showButton = document.getElementById("show")


  addEventToHideAndShowDialog("hide", undefined, "dialog")


  expect(hideButton.listeners).toContain("click")
  expect(dialogFake.style.display).toBe("none")


  addEventToHideAndShowDialog("hide", "show", "dialog")


  expect(hideButton.listeners).toContain("click")
  expect(showButton.listeners).toContain("click")
  expect(dialogFake.style.display).toBe("")
})


