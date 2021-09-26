const api = new ApiService("http://localhost:3000")

api.getParks().then(console.log)