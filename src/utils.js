

const calculatesTheValueOfAdimensionToCenterElement = 
  (dimensionOfSreen, lengthOfElementInPercentage) => {
  let lengthOfElement = 
      (lengthOfElementInPercentage / 100 ) * dimensionOfSreen
  return (dimensionOfSreen - lengthOfElement) / 2 
} 


export {calculatesTheValueOfAdimensionToCenterElement}
