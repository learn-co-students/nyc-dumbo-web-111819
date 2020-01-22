class Toybox {

  static all = []
  constructor(toyboxObj) {
    this.id = toyboxObj.id
    this.name = toyboxObj.name
    this.toys = toyboxObj.toys

    // STRUCTURE (render)
    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = this.name
      this.buttonTag.classList.add("toybox")
    toyboxDiv.append(this.buttonTag)

    // Event Listeners
    this.buttonTag.addEventListener('click', this.renderAllToys)
    Toybox.all.push(this)
    // <button className="toybox" id="rad" onClick={this.renderAllToys}>{this.name}</button>
  }


  renderAllToys = () => {
    toyCollectionDiv.innerHTML = ''
    this.toys.forEach(toy => {
      new Toy(toy)
    })
  }


























}
