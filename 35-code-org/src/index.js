addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
  } else {
    toyFormContainer.style.display = 'none'
  }
})


Adaptor.getAllToyboxes()
  .then((toyboxes) => {
    toyboxes.forEach(box => {
      new Toybox(box)
    })
  })
