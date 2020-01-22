const API = "http://localhost:3000"

const getAllToyboxes = () => (fetch(API+ "/toyboxes").then(r => r.json()))
const deleteOneToy = (id) => {
  return fetch(API+ `/toys/${id}`,
    {method: "DELETE"})
    .then(r => r.json())
  }



const Adaptor = {
  getAllToyboxes,
  deleteOneToy
}
