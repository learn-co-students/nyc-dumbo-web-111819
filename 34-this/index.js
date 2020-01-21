function globalIntroduction(){
  return `Hi, I am ${this.name}`
}

const rei = {
  fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: globalIntroduction
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  introduce: globalIntroduction
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction
}



// WHAT IS THE VALUE OF THIS?

document.querySelector("h1").addEventListener("click", function(event){
  // console.log(this);
})




let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
  // console.log(this);
})



fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);
})
