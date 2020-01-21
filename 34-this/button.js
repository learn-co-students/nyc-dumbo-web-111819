let mainDiv = document.querySelector("#main-div")


class ButtonJS{

  constructor(color){
    // `this` -> instance
    this.color = color

    // STRUCTURE
    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = `Click: ${this.color}`
    mainDiv.append(this.buttonTag)

    // EVENT LISTENERS
    this.buttonTag.addEventListener("click", this.handleClick)


    // <button onClick={this.handleClick}>{`Click: ${this.color}`}</button>
  }


  handleClick = (evt) => {
    // this should be the ButtonJS
    console.log(this);
    console.log(evt.target);
    document.body.style.backgroundColor = this.color
    // debugger;
  }














}
