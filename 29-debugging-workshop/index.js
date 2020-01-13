document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userNameInput = document.getElementById('name-input').value
    console.log(userNameInput)
    // let userNameInput = event.target["name-input"].value
    if(userNameInput === ""){
      return;
    }

    fetchJoke()
    .then(jokeData => {
      let joke = jokeData.joke
      const newJokeLi = document.createElement('li')

      newJokeLi.innerHTML = `
      <span class="username">${userNameInput} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)

    })
  })

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

})
