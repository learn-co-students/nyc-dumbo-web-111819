Adaptor.getAllCategories()
.then(categories => {
  categories.forEach(category => {
    new Category(category)
  })
  Category.all[0].handleClick()
})


pastOrderForm.addEventListener("submit", handlePastOrderForm)
newOrderForm.addEventListener("submit", handleNewOrderForm)
newBurgerForm.addEventListener("submit", handleCreateBurger)


function handlePastOrderForm(evt){
  evt.preventDefault()
  let name = evt.target.past_name.value
  Adaptor.orderHistory(name)
  .then((resp) => {
    if (resp.id) {
      console.log(resp);
      ordersDiv.innerHTML = ""
      resp.orders.forEach(order => {
        new PastOrder(order)
      })
    }
  })
}



function handleNewOrderForm(evt){
  evt.preventDefault()
  let name = evt.target.new_name.value

  Adaptor.createNewOrder(name, ordersArray)
  .then((user) => {
    arrayOfIds = []
    ordersUL.innerHTML = ""
    totalSpan.innerText = "0"
    evt.target.reset()
  })
}


















function handleCreateBurger(evt){
  evt.preventDefault()
  let form = evt.target

  let name = form.name.value
  let description = form.description.value
  let image = form.image.value
  let price = form.price.value
  let category_id = form.category_id.value

  let newBurgerObj = {
    name,
    description,
    image,
    price,
    category_id
  }

  Adaptor.postNewBurger(newBurgerObj)
  .then((newBurger) => {
    let foundCategory = Category.all.find(category => category.id === newBurger.category_id)
    foundCategory.burgers.push(newBurger)
    new Burger(newBurger)
    form.reset()
  })



}
