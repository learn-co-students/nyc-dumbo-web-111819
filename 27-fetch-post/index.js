let foxButton = document.getElementById('hello-button')
let foxesUl = document.querySelector("#foxes")

foxButton.addEventListener("click", (evt) => {

  fetch("http://localhost:3000/foxes/random")
    .then(r => r.json())
    .then((foxObj) => {
      turnJSONtoHTML(foxObj)
    })

})









let turnJSONtoHTML = (foxObj) => {
  let newImageTag = document.createElement("img")
  newImageTag.src = foxObj.img_url
  newImageTag.alt = foxObj.name

  let newLi = document.createElement("li")
  newLi.append(newImageTag)

  foxesUl.append(newLi)

  newLi.addEventListener("click", () => {
    newLi.remove()
  })

}
