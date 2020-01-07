// on clicking *any* p tag, change the font to comic sans
// this is the font-family to use: "Comic Sans MS", cursive, sans-serif

// grab all the p tags
const allPs = document.querySelectorAll("p")

// iterate thru them
allPs.forEach(function (pTags) {
  // add an event listener to each one
  pTags.addEventListener("click", handlePtagClick)
})

// arr.each do |kitten|
//   puts kitten.name
// end

// in the event listener, do tha thang
function handlePtagClick(event) {
  event.target.style.color = "rebeccapurple"
  event.target.style.fontFamily = "'Comic Sans MS', cursive, sans-serif"
}