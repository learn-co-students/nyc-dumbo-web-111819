class Burger {
  constructor(burger) {
    this.id = burger.id
    this.name = burger.name
    this.image = burger.image
    this.price = burger.price
    this.category_id = burger.category_id
    this.description = burger.description

    this.outerDiv = document.createElement('div')
      this.outerDiv.classList.add('burger')

    this.nameH3 = document.createElement('h3')
      this.nameH3.classList.add('burger_title')
      this.nameH3.innerText = `${this.name} | $ ${this.price}`

    this.imgTag = document.createElement('img')
      this.imgTag.alt = this.name
      this.imgTag.src = this.image

    this.descriptionP = document.createElement('p')
      this.descriptionP.classList.add('burger_description')
      this.descriptionP.innerText = this.description

    this.orderButton = document.createElement('button')
      this.orderButton.classList.add('button')
      this.orderButton.innerText = 'Add to Order'

      this.outerDiv.append(this.nameH3, this.imgTag, this.descriptionP, this.orderButton)

      burgerMenuDiv.append(this.outerDiv)
      this.orderButton.addEventListener("click", this.handleOrder)

  }

  handleOrder = () => {
    ordersArray.push(this.id)
    totalSpan.innerText = parseInt(totalSpan.innerText) + this.price
    let orderLi = document.createElement("li")
      orderLi.innerText = `${this.name} - $ ${this.price}`
    ordersUL.append(orderLi)
  }
}
