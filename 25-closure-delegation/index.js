// 1. Figure out which element is triggering the event
// 2. Decide what of type event we're handling
// 3. Write a callback function that will run when the event happens

document.addEventListener("DOMContentLoaded", function () {

  // DOM Elements
  const tacoButton = document.getElementById("taco")
  const emojiForm = document.querySelector("#emoji-form")
  const emojiList = document.querySelector("#blobs")

  // Start Hard-code
  let theOriginalSixEmojis = emojiList.querySelectorAll("li")

  theOriginalSixEmojis.forEach( function(emojiLi){
    emojiLi.addEventListener("click", function(){
      emojiLi.remove()
    })
  })
  // End Hard-code



  // Closure: Uses a function that takes
  // JS -> <HTML/>
  // Real definition: Functions have access to variables on higher scope

  // Render Helpers
  function renderOneEmoji(emoji) {
    const newLi = document.createElement("li")
    newLi.textContent = emoji
    emojiList.append(newLi)

    newLi.addEventListener("click", function(){
      newLi.remove()
    })

    // newLi.addEventListener("click", innerDefinition)
    // function innerDefinition(evt){
    //   // debugger
    //   newLi.remove()
    // }
  }

  // Event Handlers
  function handleTacoClick() {
    renderOneEmoji("🌮")
  }

  function handleEmojiFormSubmit(event) {
    event.preventDefault()
    const newEmoji = event.target["emoji"].value
    renderOneEmoji(newEmoji)
    event.target.reset()
  }

  // Event Listeners
  emojiForm.addEventListener("submit", handleEmojiFormSubmit)
  tacoButton.addEventListener("click", handleTacoClick)


  // DELEGATION
  // 1) Find a stable parent on the index.html
  // 2) Add Event Listener
  // 3) Use an if statement
  // 4) Execute event listener

  // emojiList.addEventListener("click", function(evt){
  //   // evt.stopPropagation()
  //   if (evt.target.tagName === "LI") {
  //     // Inside here, evt.target -> <li>
  //     evt.target.remove()
  //   }
  // })

})
