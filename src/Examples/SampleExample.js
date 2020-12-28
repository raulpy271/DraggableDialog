import CreateDialog from '../Dialog/Dialog.js';


function Top() {
  return (
    <div>
      Hello
    </div>
  )
}


function Content() {
  return (
    <div>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
      </p>
      <p>
Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Viva Forevis aptent taciti sociosqu ad litora torquent. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. 
        </p>
    </div>
  )
}


const SampleExample = CreateDialog({
  TopBar : Top,
  DialogBody : Content,
  defaultSizeInPercentage : 30,
  dialogStyle : {"color" : "cyan"}
})


export default SampleExample
