function isItEven(first, second, third){
  console.log(first, second, third);

  if (first.length % 2 === 0) {
    console.log("It is even!")
    return "EVEN"
  } else {
    console.log("It is odd!")
    return "ODD"
  }

}

let arrayOfStrings = ["hello", "cat", "dogs"]

arrayOfStrings.forEach( isItEven )

// arrayOfStrings.forEach( function callBackFunc(element, index, originalArray){
//   console.log("THE ELEMENT IS:", element);
//   console.log("THE INDEX IS:", index);
//   console.log("THE ORIGINAL ARRAY IS:", originalArray);
// } )
