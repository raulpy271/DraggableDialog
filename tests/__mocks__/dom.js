

let allElements = {}


let createElement = id => ({
  "id" : id,


  "listeners" : [],


  "addEventListener" : function(event, callback) {
    this.listeners.push(event)
    callback()
  },


  "style" : {}
})



document.getElementById = id => {
  let element;
  let key = String("elementFake-Id_" + id)


  if (allElements[key]) {
    element = allElements[key]
  } else {
    element = createElement(id)
    allElements[key] = element
  }


  return element
}


