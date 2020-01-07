// 1. Figure out which element is triggering the event
// 2. Decide what of type event we're handling
// 3. Write a callback function that will run when the event happens
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const tacoButton = document.getElementById("taco")
  const emojiForm = document.querySelector("#emoji-form")
  const emojiList = document.querySelector("#blobs")

  // Render Helpers
  function renderOneEmoji(emoji) {
    // <li>💪</li>
    // 1. document.createElement
    const newLi = document.createElement("li")
    newLi.textContent = emoji
    emojiList.append(newLi)

    // 2. emojiList.innerHTML
    // emojiList.innerHTML += "<li>🌮</li>"

    // 3. insertAdjacentHTML
    // emojiList.insertAdjacentHTML("beforeend", "<li>🌮</li>")
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

})