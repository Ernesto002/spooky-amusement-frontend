class Attraction {

    constructor(data){
        this.data = data
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
}