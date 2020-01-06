// READ
let theUL = document.querySelector("ul#blobs")
// let anotherWayToGrabTheUL = document.querySelector("#blobs")
// let anotherWay = document.querySelector(".js-blobs")

// let allTheULs = document.querySelectorAll("ul")

// let theSameUL = document.getElementById('blobs')

// let theULCollection = document.getElementsByClassName('js-blobs')





// CREATE

// 1) Get a blank sheet of paper
let blankLi = document.createElement("li")

// 2) Razzmatazz
blankLi.id = "taco"
blankLi.className = "shmaco"
blankLi.classList.add("anotherOne", "alex")

blankLi.innerText = "🌮"
// blankLi.textContent = "🌮"

// 3) Find an appropriate place on the DOM
theUL.append(blankLi)


// ANOTHER WAY
// theUL.innerHTML += "<li> <p>Hello</p> </li>"





// UPDATE
// 1) Find the element on the DOM
let theH1Collection = document.getElementsByTagName('h1')
let theFirstH1 = theH1Collection[0]

// 2) Razzmatazz
// theFirstH1.innerText = "Here is a nice list, grandma!"
// theFirstH1.id = "firstHeading"





// DESTROY
// 1) Find the element on the DOM
let anotherWayToFindH1 = document.querySelector("h1")
let theSpanIWantToRemove = anotherWayToFindH1.querySelector("span")
// let theSpanIWantToRemove = document.querySelector("h1>span")

// 2) Remove
theSpanIWantToRemove.remove()


let allBadEmojis = theUL.querySelectorAll(".bad")
let badEmojis = theUL.getElementsByClassName("bad")

function removeOneLi(li){
  li.remove()
}

allBadEmojis.forEach( removeOneLi )
















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

// arrayOfStrings.forEach( isItEven )

// arrayOfStrings.forEach( function callBackFunc(element, index, originalArray){
//   console.log("THE ELEMENT IS:", element);
//   console.log("THE INDEX IS:", index);
//   console.log("THE ORIGINAL ARRAY IS:", originalArray);
// } )
