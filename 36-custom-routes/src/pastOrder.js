class PastOrder {
  constructor(order) {
    this.id = order.id
    this.burgers = order.burgers
    this.timestamp = order.timestamp
    this.price = order.price

    this.outerDiv = document.createElement('div')
      this.outerDiv.classList.add('card')
    this.timeH4 = document.createElement('h4')
      this.timeH4.innerText = this.timestamp
    this.priceP = document.createElement('p')
      this.priceP = `$ ${this.price}`

    this.deleteButton = document.createElement('button')
      this.deleteButton.classList.add("deleteButton")
      this.deleteButton.innerText = 'x'


    this.outerDiv.append(this.timeH4, this.priceP, this.deleteButton)
    ordersDiv.append(this.outerDiv)


  }
}
