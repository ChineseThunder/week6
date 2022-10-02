
function editOne() {
    document.getElementById("btn-find-car-to-edit").onclick = findCar
    document.getElementById("btn-submit-changes").onclick = submitEditedCar

    function findCar() {
        const carToEditId = document.getElementById("id-editcar").value
        const car = fetch(URL + carToEditId)
            .then(r => r.json())
            .then(car => {
                document.getElementById("edit-car-id").innerText = car.id
                document.getElementById("edit-input-brand").value = car.brand
                document.getElementById("edit-input-model").value = car.model
                document.getElementById("edit-input-price-pr-day").value = car.pricePrDay
            })
    }

    function submitEditedCar() {
        const editedCar = {}
        editedCar.id = document.getElementById("edit-car-id").innerText
        editedCar.brand = document.getElementById("edit-input-brand").value
        editedCar.model = document.getElementById("edit-input-model").value
        editedCar.pricePrDay = document.getElementById("edit-input-price-pr-day").value
        //Now newCar contains all required fields (mathces the DTO on the backend) and values

        //Build the options object requred for a PUT
        const options = {}
        options.method = "PUT"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(editedCar)
        //Observe, id is added to the URL
        fetch(URL + editedCar.id, options)
            .then(r => {
                console.log("No Data returned from the server")
                alert("Car was succesfully edited - Not the right way to report this")
            })
    }
}