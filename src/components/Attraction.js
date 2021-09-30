class Attraction {

    constructor(data, park){
        this.data = data
        this.park = park
    }

    render = () => {
        const { title, description, tickets, image, username, parkId} = this.data
        document.querySelector(".container").innerHTML += `
        <div class="card" data-id=${parkId}>
            <h2>${title}</h2>
            <img src=${image} alt=${title}/>
            <p>${description}</p>
            <p>Ticket Cost: ${tickets}</p>
            <p>Created By: ${username}
        </div>
        `
    }

    static openAttractionForm = () => {
        modal.main.innerHTML = `
        <h1>Add an attraction!</h1>
        <form>
            <label for="title">Title:</label><br>
            <input type="text" name="title" required><br>
            <label for="description">Description:</label><br>
            <input type="text" name="description" required><br>
            <label for="tickets">Ticket Price:</label><br>
            <input type="number" name="tickets" required><br>
            <label for="image">Image:</label><br>
            <input type="text" name="image" required><br>
            <input type="submit" value="Add attraction!"><br>
        </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handleAttractionSubmit)
        modal.open()
    }

    static handleAttractionSubmit = (e) => {
        e.preventDefault()
        const newAttraction = {
            title: e.target.title.value,
            description: e.target.description.value,
            tickets: e.target.tickets.value,
            image: e.target.image.value
        }
        api.createAttraction(newAttraction).then(attraction => {
            new Attraction(attraction).render()
        })
        modal.close()
        e.target.reset()
    }
}