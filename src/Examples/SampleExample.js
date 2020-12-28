import CreateDialog from '../Dialog/Dialog.js';


function Top() {
  return <p 
    style={{
      "margin"  : "0px",
      "padding" : "10px"
    }}
    > Mussum Ipsum </p>
}


function Content() {
  return (
    <div style={{"backgroundColor" : "white"}}>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
      </p>
    </div>
  )
}


const SampleExample = CreateDialog({
  TopBar : Top,
  DialogBody : Content,
  defaultSizeInPercentage : 30,
})


export default SampleExample
