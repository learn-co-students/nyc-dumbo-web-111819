// Code your solution here
let shoeListUl = document.getElementById('shoe-list')

let shoeImage = document.getElementById('shoe-image')
let shoeName = document.getElementById('shoe-name')
let shoeDescription = document.getElementById('shoe-description')
let shoePrice = document.getElementById('shoe-price')

let formContainer = document.getElementById('form-container')
let reviewsList = document.getElementById('reviews-list')


fetch("http://localhost:3000/shoes")
  .then(res => res.json())
  .then((shoesArr) => {
    shoesArr.forEach((shoeObj) => {
      takeOneShoeObjTurnToLi(shoeObj)
    })
    renderMainShoe(shoesArr[0])
  })





function takeOneShoeObjTurnToLi(shoeObj){
  let shoeNameLi = document.createElement("li")
  shoeNameLi.className = "list-group-item"
  shoeNameLi.innerText = shoeObj.name
  shoeListUl.append(shoeNameLi)

  shoeNameLi.addEventListener("click", () => {
    renderMainShoe(shoeObj);
  })

}





function renderMainShoe(shoeObj){
  console.log(shoeObj);
  shoeImage.src = shoeObj.image
  shoeImage.alt = shoeObj.name
  shoeName.innerText = shoeObj.name
  shoeDescription.innerText = shoeObj.description
  shoePrice.innerText = shoeObj.price
  renderForm(shoeObj)
  renderReviews(shoeObj)
}





function renderForm(shoeObj){
  formContainer.innerHTML = ""
  let newReviewForm = document.createElement("form")
  newReviewForm.id = "new-review"

  newReviewForm.innerHTML = `<div class="form-group">
      <textarea class="form-control" id="review-content" rows="3"></textarea>
      <input type="submit" class="btn btn-primary"></input>
    </div>`

  // let newDiv = document.createElement("div")
    // newDiv.className = "form-group"
  formContainer.append(newReviewForm)

  let theTextArea = newReviewForm.querySelector("textarea")
  newReviewForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let newContent = evt.target["review-content"].value

    fetch(`http://localhost:3000/shoes/${shoeObj.id}/reviews`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: newContent
      })
    })
    .then(r => r.json())
    .then((newReview) => {
      takeOneReviewToLi(newReview)
      shoeObj.reviews.push(newReview)
    })
  })
}





function renderReviews(shoeObj){
  reviewsList.innerHTML = ""
  // while (reviewsList.firstChild) {
    // reviewsList.firstChild.remove()
  // }
  shoeObj.reviews.forEach((reviewObj) => {
    takeOneReviewToLi(reviewObj)
  })
}






function takeOneReviewToLi(reviewObj){
  let reviewLi = document.createElement("li")
  reviewLi.className = "list-group-item"
  reviewLi.innerText = reviewObj.content
  reviewsList.append(reviewLi)
}

















//
