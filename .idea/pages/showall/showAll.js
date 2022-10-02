function showAll() { //We will add errorhandling when we meet in the class
    fetch(URL)
        .then(r => r.json())
        .then(allCars => {
            const tableRows = allCars.map(car => `
          <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
          </tr>
        `
            ).join("")
            document.getElementById("tbl-cars-body").innerHTML = tableRows
        })
        .catch(e => console.log(e))
}