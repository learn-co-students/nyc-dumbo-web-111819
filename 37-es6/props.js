// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  let name = "Eric Kim"
  let age = 11
  let eating = ["junk", "garbage"]

  let eric = { name , eating }
  // let's make ⬆️ this object have some props!

  // console.log(eric);





// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

  // {[evt.target.name] : evt.target.value }
  const whatIwantToDoMore = "dance";

  const newYearsResolution = {
    body: "Write code every day",
    [whatIwantToDoMore]: "more",
    "eric kim": "chicken"
  }

  console.log(newYearsResolution);
  const theKeyIwantToPull = "body"

  console.log(newYearsResolution[theKeyIwantToPull]);
  // -> "write code every day"
  console.log(newYearsResolution['theKeyIwantToPull']);
  // -> undefined because there is no key called theKeyIwantToPull























//
