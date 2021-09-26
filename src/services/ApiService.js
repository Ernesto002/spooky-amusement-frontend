class ApiService {

    constructor(api){
        this.api = api
    }

    getParks = () => fetch(this.api + "/parks").then(res => res.json())
}