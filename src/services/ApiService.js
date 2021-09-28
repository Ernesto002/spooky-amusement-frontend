class ApiService {

    constructor(api){
        this.api = api
    }

    getParks = () => fetch(this.api + "/parks").then(res => res.json())

    createPark = (newPark) => {
        return fetch(this.api + "/parks", {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPark),
        })
        .then(response => response.json())
      }
}