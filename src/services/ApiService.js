class ApiService {

  constructor(api){
    this.api = api
  }

  getParks = () => fetch(this.api + "/parks").then(res => res.json())

  createPark = (newPark) => {
    newPark.user_id = user.id
    return fetch(this.api + "/parks", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPark),
    })
    .then(response => response.json())
  }

  createAttraction = (newAttraction) => {
    newAttraction.user_id = user.id
    return fetch(this.api + "/attractions", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAttraction)
    })
    .then(response => response.json())
  }

  findOrCreateUser = (username) => {
    return fetch(this.api + "/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username}),
    })
    .then(response => response.json())
  }
  
}