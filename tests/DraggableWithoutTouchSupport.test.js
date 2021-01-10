import Draggable from '../src/DraggableWithoutTouchSupport.js'


var dialog;


describe("Passing parameters to Draggable", () => {
  beforeEach( () => {
    dialog = new Draggable({
      "dialogId"                   : "dialog",
      "elementThatCaptureTheClick" : "bar",
      "showButtonId"               : "showButton",
      "hideButtonId"               : "hideButton",
      "centerElement"              : true
    })
  }) 


  test("Testing center parameter", () => {
    console.log(dialog)
  })
})


