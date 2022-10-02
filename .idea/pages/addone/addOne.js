function addOne() {
    document.getElementById("bnt-submit-new-car").onclick = makeNewCar
    function makeNewCar() {
        const newCar = {}
        newCar.brand = document.getElementById("input-brand").value
        newCar.model = document.getElementById("input-model").value
        newCar.pricePrDay = document.getElementById("input-price-pr-day").value
        //Now newCar contains all required fields (MUST match the DTO on the backend) and their values

        //Build the options object requred for a POST
        const options = {}
        options.method = "POST"
        options.headers = { "Content-type": "application/json" }
        options.body = JSON.stringify(newCar)

        fetch(URL, options)
            .then(r => r.json())
            .then(addedCar => document.getElementById("returned-new-car").innerText = JSON.stringify(addedCar, null, 2)
            )
    }
}