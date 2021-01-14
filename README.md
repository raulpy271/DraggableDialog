
# Create A Draggable, Resizable, and Custom Dialog

![Terminal in browser](/assets/example.gif)

This is a library that use Vanilla Javascript to create draggable dialogs. He automates the process of create events that listen to the touches and clicks and moves. 

So, you don't need to worry about create javascript code, to turn draggable your elements, you will only create the html and styles of the dialog, and the lib will turn it draggable to desktop and phones users.

See a [demo](https://raulpy271.github.io/DraggableDialog/) page, and as the [source](index.html) code is simple.

## Why?

The dialog box in sites are very common, they have different utilities. But, I don't know something that helps developers to automate the process of creating Draggable dialogs. I only found a snippet of codes that are either poorly documented or difficult to custom, or with another mistake. 

So to help me and the others, I decided to write a lib that turns containers draggable, she should be custom, easy to use, and well documented.

## Examples

To turn a dialog draggable, you need only type this:

```js
new Draggable({
  "dialogId"                   : "elementId",
  "elementThatCaptureTheClick" : "elementId"
})
```

As you see, you have to pass to Draggable an object with the id of the element that will be draggable and the id of the element that will listen to touches and clicks to drag the dialog. Normally, this is the top bar of the dialog, but can be whatever element that you want, or can be the entire dialog, so you can drag touching in any part of the dialog.

To see more methods that this object can have, see the documentation [section](#documentation).

## Installation 

The library can be used in the browser or in NodeJs environment to be used in React or other libraries.

### Installation in browser

To use in the browser, you can import this library in a tag script:

```html
<script src="https://ghcdn.rawgit.org/raulpy271/DraggableDialog/master/dist/Draggable.js"></script>
```

### Installation in NodeJs (ReactJs or others libraries)

You can use the npm to install this library with this command:

```sh
$ npm install draggable_dialog --production
```

I used this library with reactJs, but you can use it with whatever library/framework that you want. It's simple, you only need to install it with npm and execute the `Draggable` class, but you have to pay attention to execute it when the component is rendered. 

See an example in react:

```js
import {useEffect} from 'react'
import Draggable from 'draggable_dialog'
import MyComponent from './MyComponent.js'


const MyComponentDraggable = () => {
  useEffect( () => 
    new Draggable({
      "dialogId" : "MyComponentId",
      "elementThatCaptureTheClick" : "MyComponentId"
    })
  )
  return <MyComponent/>
}
```

I use `useEffect` to execute the library after the component is rendered. Feels free to add examples with other libraries.

## documentation

To use all features you should know all parameters passed to the `Draggable` class. The parameters is passed via an object. This object can have these methods:

Object Key | Importance | Action
---------- | ---------- | ------
`dialogId` | required | This is the id of the entire dialog
`elementThatCaptureTheClick` | required | This is the id of the element that will listen for drags
`centerElement` | optional | A boolean value. if it's true then the library will centralize the element, or If it's omitted or is false, the library doesn't will
`hideButtonId` | optional | The id of the close button. If used, the library will add an event in this button to close the dialog when the button has clicked
`showButtonId` | optional | The id of the button that shows the dialog. If used, the library will add an event in this button to show the dialog only when clicked

