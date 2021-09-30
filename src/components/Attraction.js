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
        <form>
            <label for="title">Title:</label><br>
            <input type="text" name="title"><br>
            <label for="description">Description:</label><br>
            <input type="text" name="description"><br>
            <label for="tickets">Ticket Price:</label><br>
            <input type="number" name="tickets"><br>
            <label for="image">Image:</label><br>
            <input type="text" name="image"><br>
            <input type="submit" value="Add attraction!"><br>
        </form>
        `
        modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
        modal.open()
    }
}