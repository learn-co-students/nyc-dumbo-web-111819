// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?

// 1) One line
// 2) NO curlies

// EXCEPTION:
// When you wrap the body of your function in parentheses

let returnChicken = () => "chicken"
let returnChicken2 = () => ("chicken2")
let returnChickenObject = () => ({name: "Chicken Little"})





let arrayOfNumbers = [100, 23, 41, 192, 231]
console.log("ORIGINAL", arrayOfNumbers);



// ******* MAP
// map - callBack must return how you want to change the element
// [{} , {} , {} ] -> [<HTML/>, <HTML/>, <HTML/>]

// arrayOfPOJOS.map(pojo => <PojoComponent>)
let doubleNum = (num) => { return num * 2}

let doubledArray = arrayOfNumbers.map( doubleNum )
console.log(doubledArray)



// *******





// ******* FILTER

// filter - callBack must return a boolean/condition

let filteredArray = arrayOfNumbers.filter((num)=> (num % 2 === 0))
console.log(filteredArray);
// *******






// ******* SORT

// sort - callback must return a number
// Sort is destructive


let copiedArray = [...arrayOfNumbers]
copiedArray.sort( (num1, num2) => num1 - num2 )

console.log(copiedArray);


let arrayOfAnimalStrings = ["zebra", "penguin", "aardvark", "dogs"]
// arrayOfAnimalStrings.sort( (animal1, animal2) => animal1 > animal2 ? 1 : -1 )
arrayOfAnimalStrings.sort( (animal1, animal2) => animal1.localeCompare(animal2) )

console.log(arrayOfAnimalStrings);

let arrayOfAnimalObjects = [{name: "zebra"}, {name: "penguin"}, {name: "aardvark"}, {name: "dogs"}]

arrayOfAnimalObjects.sort( (animal1Obj, animal2Obj) => animal1Obj.name.localeCompare(animal2Obj.name) )
console.log(arrayOfAnimalObjects);



















// *******
