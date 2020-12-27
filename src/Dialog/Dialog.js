import React from 'react';
import './Dialog.css'
import {calculatesTheValueOfAdimensionToCenterElement} from '../utils.js'


const CreateDialog = (TopBar, DialogBody, defaultSizeInPercentage) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.defaultSizeInPercentage = defaultSizeInPercentage
      this.state = {
        top :  0,
        left : 0,
        width : 0,
        height : 0,
        lastTouchX : 0,
        lastTouchY : 0
      }
    }


    componentDidMount = () => {
      let heightOfScreen = window.innerHeight
      let widthOfScreen = window.innerWidth
      let top = calculatesTheValueOfAdimensionToCenterElement(
        heightOfScreen, this.defaultSizeInPercentage)
      let left = calculatesTheValueOfAdimensionToCenterElement(
        widthOfScreen, this.defaultSizeInPercentage)


      this.setState({
        top    : top,
        left   : left,
        width  : this.defaultSizeInPercentage, 
        height : this.defaultSizeInPercentage 
      })
    }


    updatePosition = (movementX, movementY) => 
      this.setState({
        top  : this.state.top  + movementY,
        left : this.state.left + movementX
      }) 


    updateLastTouch = touch =>
      this.setState({
        lastTouchX : touch.clientX,
        lastTouchY : touch.clientY
      })


    updatePositionWhenHoldClick = clickEvent => {
      this.updatePosition(clickEvent.movementX, clickEvent.movementY)
    }


    updatePositionWhenHoldTouch = touchEvent => {
      if (touchEvent.touches.length === 1 ) {
        let touch = touchEvent.touches[0]
        let movementX = touch.clientX - this.state.lastTouchX
        let movementY = touch.clientY - this.state.lastTouchY
        this.updatePosition(movementX, movementY)
        this.updateLastTouch(touch)
      }
    }


    click = mouseEvent => {
      window.onmousemove = this.updatePositionWhenHoldClick 
      window.onmouseup = this.endClick
    }


    endClick = () => {
      window.onmousemove = null
      window.onmouseup   = null
    }


    touch = touchEvent => {
      let touch = touchEvent.touches[0]
      window.ontouchmove = this.updatePositionWhenHoldTouch
      window.ontouchend  = this.endTouch
      this.updateLastTouch(touch)
    }


    endTouch = () => {
      window.ontouchmove = null
      window.ontouchend  = null
    }


    render() {
      return (
        <div 
          className="dialog"
          style = {{
            "top"    : String(this.state.top)  + "px",
            "left"   : String(this.state.left) + "px",
            "width"  : String(this.state.width)  + "%",
            "height" : String(this.state.height)  + "%"
          }}
        >
          <div className="dialogTopBar"
            onMouseDown={this.click} onTouchStart={this.touch}>
            <TopBar/>
          </div>
          <div className="dialogContent">
            <DialogBody/>
          </div>
        </div>
      )
    }
  }
}


export default CreateDialog
