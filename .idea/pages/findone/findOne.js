function findOne() {
    document.getElementById("car-info").innerText = ""
    document.getElementById("btn-find-one").onclick = findCar

    function findCar() {
        const carToFindId = document.getElementById("text-for-id").value

        fetch(URL + carToFindId)
            .then(r => r.json())
            .then(car => document.getElementById("car-info").innerText = JSON.stringify(car, null, 2)
            )
    }
}