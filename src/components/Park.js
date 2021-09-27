class Park {

    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const { name, address, city, state, detail, imageUrl } = this.data
        document.getElementById("main").innerHTML = `
        <div class="show">
            <h1>${name}</h1>
            <img src=${imageUrl} alt=${name}/>
            <p>${address}</p>
            <p>${city}, ${state}</p>
            <p>${detail}</p>
        </div>
        <button id="goBack">Go Back</button>
        `
        document.getElementById("goBack").addEventListener("click", Park.renderIndex)
    }

    renderCard = () => {
        const { name, city, state, imageUrl, id} = this.data
        document.getElementById("park-container").innerHTML += `
        <div class="park-card" data-id=${id}>
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
            <p>${city}, ${state}</p>
        </div>`
    }

    static openParkForm = () => {
        modal.main.innerHTML += `
        <h1>Add your park!</h1>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"><br>
            <label for="address">Adress:</label><br>
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
        modal.open()
    }

    static find = (id) => this.all.find(park => park.data.id == id)


    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
            const id = e.target.closest(".park-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static renderIndex = () => {
        const main = document.getElementById("main")
        main.innerHTML = " "
        const parkContainer = document.createElement("div")
        parkContainer.id = "park-container"
        const addPark = document.createElement("button")
        addPark.innerText = "Add a new Spooky Amusement Park!"
        addPark.addEventListener("click", this.openParkForm)
        main.append(parkContainer, addPark)
        this.all.forEach(park => park.renderCard())
        parkContainer.addEventListener("click", this.handleIndexClick)
    }

    static getParks = () => {
        api.getParks().then(parks => {
            parks.forEach(park => new Park(park))
            this.renderIndex()
        })
    }
}