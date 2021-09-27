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
        document.getElementById("main").appendChild(parkContainer)
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