let blueButton = new ButtonJS("Blue")
let greenButton = new ButtonJS("Green")
new ButtonJS("FireBrick")
new ButtonJS("Cyan")
new ButtonJS("Red")

// bind is a function that you can invoke on a function definition that returns a function definition with `this` changed to the first argument

// call is a function that you can invoke on a function definition that invokes a function with `this` changed to the first argument (You pass in arguments individually)

// apply is a function that you can invoke on a function definition that invokes a function with `this` changed to the first argument (You pass in an array of arguments)

// baseless functions (functions defined with the `function` keyword) get their `this` from the execution
// arrow functions get their `this` from their definition


let introduceAF = () => {
  console.log("THIS IS THIS:", this);
  return `Hi, I am ${this.name}`
}

function globalIntroduction(first, second, third){
  console.log("THIS IS THIS:", this);
  console.log(first, second, third);
  return `Hi, I am ${this.name}`
}

const rei = {
  fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: introduceAF
}

let reiBoundFunction = globalIntroduction.bind(rei)

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  introduce: reiBoundFunction
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction
}



// snippet 1

eric.introduce()
// this -> eric {}



// snippet 2

let methodName = eric.introduce
methodName()
// this -> windowObject
















// WHAT IS THE VALUE OF THIS?

document.querySelector("h1").addEventListener("click", function(event){
  // console.log(this);

  // this -> h1Tag
  // this -> event.currentTarget (the element who has the event Listener added)
})



let arr = [1, 4, 3, 4]
arr.forEach(function(element, index, originalArray) {
  // console.log(this);

  // this -> window
})



fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);

  // this -> window
})
