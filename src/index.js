const api = new ApiService("http://localhost:3000")
const modal = new Modal()
let user

// Park.getParks()
document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
  e.preventDefault()
  document.getElementById("main").innerHTML = ""
  api.findOrCreateUser(e.target.username.value).then(userData => {
    user = userData
    Park.getParks()
  })
}