class Person{

  eat(){
    return "I am eating."
  }

}


class Instructor extends Person{

  static all = []

  constructor(name, fullName){
    super()
    console.log("THIS IS THE NAME: ", name);
    console.log("THIS IS THE FULL NAME: ", fullName);
    // `this` -> self (instance)
    this.name = name
    this.fullName = fullName

    Instructor.all.push(this)
  }

  introduce(){
    // `this` -> would be great if it was the instance
    return `Hi, I am ${this.fullName}`
  }

  static allNames(){
    // `this` -> would be great if it was the class
    return Instructor.all.map(inst => inst.name)
  }

  eat(){
    return super.eat().toUpperCase()
  }




}


let ericInst = new Instructor("Eric", "Hyeok Jung Kim")
let sylwiaInst = new Instructor("Sylwia", "Sylwia Vargas")
let reiInst = new Instructor("Rei", "Reymond Reynoso")
let ianInst = new Instructor("Ian", "Ian Hollander")
// <Instructor/>

































function globalIntroduction(){
  return `Hi, I am ${this.name}`
}

const rei = {
  // fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: globalIntroduction
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  introduce: globalIntroduction
}

const eric = {
  legalName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction,
  nickname: "Henry"
}

// console.log(rei.introduce())
// console.log(eric.introduce())
// console.log(sylwia.introduce())
//
// console.log(eric.introduce);
// console.log(rei.introduce);

// console.log(eric.introduce() === rei.introduce())

// console.log(eric.introduce === rei.introduce)

























//
