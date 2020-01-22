class Category {
  static all = []

  constructor(category) {
    this.id = category.id
    this.name = category.name
    this.burgers = category.burgers

    this.buttonTag = document.createElement('button')
      this.buttonTag.innerText = this.name
      this.buttonTag.classList.add("category")

    buttonContainerDiv.append(this.buttonTag)

    this.buttonTag.addEventListener("click", this.handleClick)

    Category.all.push(this)
  }

  handleClick = () => {
    if (parseInt(newBurgerForm["category_id"].value) !== this.id) {
      burgerMenuDiv.innerHTML = ""
      newBurgerForm["category_id"].value = this.id
      this.burgers.forEach(burger => {
        new Burger(burger)
      })
    }
  }

}
