let foxButton = document.getElementById('hello-button')
let foxesUl = document.querySelector("#foxes")
let newFoxForm = document.querySelector("#fox-form")

newFoxForm.addEventListener("submit", (event) => {
  event.preventDefault()

  let newFoxName = event.target.fox_name.value
  let newFoxImage = event.target.fox_img.value
  // let newFoxName = event.target.f_name.value
  // let newFoxName = event.target["f_name"].value
  // let newFoxName = event.target["fox_name"].value
  // let newFoxName = document.querySelector("#fox_name").value
  // let newFoxName = event.target.querySelector("#fox_name").value

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      name: newFoxName,
      img_url: newFoxImage,
    })
  })
    .then(r => r.json())
    .then(turnJSONtoHTML)

})






// MORNING

foxButton.addEventListener("click", (evt) => {

  fetch("http://localhost:3000/foxes/random")
    .then(r => r.json())
    .then((foxObj) => {
      turnJSONtoHTML(foxObj)
    })

})

// DATASET - Keyword belonging to all HTML tags to store information about the tag

let turnJSONtoHTML = (foxObj) => {
  let newImageTag = document.createElement("img")
  newImageTag.src = foxObj.img_url
  newImageTag.alt = foxObj.name

  newImageTag.dataset.id = foxObj.id

  let newLi = document.createElement("li")
  newLi.append(newImageTag)

  foxesUl.append(newLi)

  newLi.addEventListener("click", () => {
    // newLi.remove()
    console.log(foxObj.id)
    console.log(foxObj.created_at)

  })

}
