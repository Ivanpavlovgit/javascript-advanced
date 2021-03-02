function attachEvents() {
    const locationArea = document.querySelector("#location");
    const weatherButton = document.getElementById('submit');
    let locationCode = '';


    weatherButton.addEventListener('click', getForecast);

    async function getForecast() {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const data = await response.json();
        Object.values(data).forEach(e => {
            if (e.name === locationArea.value)
                locationCode = e.code;
        });
        console.log(locationCode);
        const dayResponse = await fetch('http://localhost:3030/jsonstore/forecaster/today/' + locationCode);
        const dayData = await dayResponse.json();
        console.log(dayData)
    }

}

attachEvents();