// Block-scoped {}
let arr = [1,2,3,4]
const arr2 = [1,2,3,4]

// Function-scoped
// var arr3 = [1,2,3,4]

// Global Variable
// arr3 = [1,2,3,4,5]

function isItEven(first, second, third, fourth){
  console.log(first, second, third);
  if (first.length % 2 === 0) {
    console.log("It is even!")
    return "CHICKEN"
  } else {
    console.log("It is odd!")
    return "DOG"
  }
}

// console.log( isItEven(arr) )
// -> Will work and return "CHICKEN" because the array is even

// console.log( isItEven() )
// -> Will fail because we can't read `length` of undefined

// console.log( isItEven )
// -> Will return the function definition

// let anotherFuncName = isItEven
// anotherFuncName([1,2,3,4,5])

let arrayOfStrings = ["hello", "cat", "dogs"]

// arrayOfStrings.forEach( isItEven )

arrayOfStrings.forEach( function callBackFunc(element, index, originalArray){
  console.log("THE INDEX IS", index);
  console.log("THE originalArray IS", originalArray);
  console.log("THE ELEMENT IS", element);
} )

















//
