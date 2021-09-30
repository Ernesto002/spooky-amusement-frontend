class Attraction {

    constructor(data, park){
        this.data = data
        this.park = park
    }

    render = () => {
        const { title, description, tickets, image } = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card">
            <h2>${title}</h2>
            <img src=${image} alt=${title}/>
            <p>${description}</p>
            <p>Ticket Cost: ${tickets}</p>
        </div>
        `
    }

    static openAttractionForm = () => {
        modal.main.innerHTML = `
        <h1>Add an attraction!</h1>
        `
        modal.open()
    }
}