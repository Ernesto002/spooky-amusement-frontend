class Park {

    static all = []
    constructor(data){
        this.data = data
        this.attractions = this.data.attractions.map(attraction => new Attraction(attraction, this))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { name, address, city, state, detail, imageUrl, username } = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <h1>${name}</h1>
            <img src=${imageUrl} alt=${name}/>
            <p>${address}</p>
            <p>${city}, ${state}</p>
            <p>${detail}</p>
            <p>Owned by: ${username}</p>
            <div class="container"></div>
        </div>
        <button id="addAttraction">Add an attraction!</button>
        <button id="goBack">Go Back</button>
        `
        document.getElementById("goBack").addEventListener("click", Park.renderIndex)
        document.getElementById("addAttraction").addEventListener("click", Attraction.openAttractionForm)
        this.attractions.forEach(attraction => attraction.render())
    }

    renderCard = () => {
        const { name, city, state, imageUrl, id} = this.data
        document.getElementById("park-container").innerHTML += `
        <div class="park-card card" data-id=${id}>
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
            <p>${city}, ${state}</p>
            <p>Number of attractions: ${this.attractions.length}</p>
        </div>`
    }

    static openParkForm = () => {
        modal.main.innerHTML = `
        <h1>Add your park!</h1>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"><br>
            <label for="address">Address:</label><br>
            <input type="text" name="address"><br>
            <label for="city">City:</label><br>
            <input type="text" name="city"><br>
            <label for="state">State:</label><br>
            <input type="text" name="state"><br>
            <label for="detail">Description:</label><br>
            <input type="text" name="detail"><br>
            <label for="imageUrl">Image:</label><br>
            <input type="text" name="imageUrl"><br>
            <input type="submit" value="Add park!"><br>
        </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
        modal.open()
    }

    static find = (id) => this.all.find(park => park.data.id == id)

    static handleSubmit = (e) => {
        e.preventDefault()
        const newPark = {
          name: e.target.name.value,
          address: e.target.address.value,
          city: e.target.city.value,
          state: e.target.state.value,
          detail: e.target.detail.value,
          image_url: e.target.imageUrl.value
        }
        api.createPark(newPark).then(park => {
          new Park(park).renderCard()
        })
        modal.close()
        e.target.reset()
    }

    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".park-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderIndex = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const parkContainer = document.createElement("div")
        parkContainer.id = "park-container"
        parkContainer.classList.add("container")
        const addPark = document.createElement("button")
        addPark.innerText = "Add a new Spooky Amusement Park!"
        addPark.addEventListener("click", this.openParkForm)
        main.append(parkContainer, addPark)
        this.all.forEach(park => park.renderCard())
        parkContainer.addEventListener("click", this.handleIndexClick)
    }

    static getParks = () => {
        api.getParks().then(parks => {
            Park.all = []
            parks.forEach(park => new Park(park))
            this.renderIndex()
        })
    }
}