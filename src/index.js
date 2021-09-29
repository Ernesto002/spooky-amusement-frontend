const api = new ApiService("http://localhost:3000")
const modal = new Modal()

// Park.getParks()
document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
  e.preventDefault()
  api.findOrCreateUser(e.target.username.value).then(console.log)
}