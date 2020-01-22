class Toy {
  constructor(toyObj) {
    this.id = toyObj.id
    this.name = toyObj.name
    this.image = toyObj.image
    this.likes = toyObj.likes
    this.toybox_id = toyObj.toybox_id

    this.outerDiv = document.createElement("div")
      this.outerDiv.className = "card"

    this.outerDiv.innerHTML = `<h2>${this.name}</h2>
    <img src='${this.image}'  class="toy-avatar" />
    <p>${this.likes} Likes </p>
    <button class="del-btn">Donate to Goodwill</button>
    <button class="like-btn">Like <3</button>`

    toyCollectionDiv.append(this.outerDiv)


    let deleteButton = this.outerDiv.querySelector(".del-btn")


    deleteButton.addEventListener("click", this.handleDelete)


  }


  handleDelete = () => {
    Adaptor.deleteOneToy(this.id)
    .then(deletedToy => {
      this.outerDiv.remove()

      // [{}, {}] -> [<><>]
      let foundToybox = Toybox.all.find(toybox => toybox.id === deletedToy.toybox_id)
      let filteredToys = foundToybox.toys.filter(toy => toy.id !== deletedToy.id)
      foundToybox.toys = filteredToys

      console.log(deletedToy);
    })
  }














}
