class Park {

    static all = []
    constructor(data){
        this.data = data
        this.constructor.all.push(this)
    }

    renderCard = () => {
        const { name, address, city, state, detail, imageUrl, id } = this.data
        document.querySelector(".park-container").innerHTML += `
        <div class="park-card">
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
            <p>${city}, ${state}</p>
        </div>`
    }

    static renderIndex(){
        const parkContainer = document.createElement("div")
        parkContainer.classList.add("park-container")
        document.getElementById("main").appendChild(parkContainer)
        this.all.forEach(park => park.renderCard())
    }

    static getParks(){
        api.getParks().then(parks => {
            parks.forEach(park => new Park(park))
            this.renderIndex()
        })
    }
}