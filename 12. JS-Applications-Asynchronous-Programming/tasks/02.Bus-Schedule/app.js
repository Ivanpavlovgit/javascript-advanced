function solve() {
    const busStopInfo = document.getElementById('info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let stopID = 'depot'
    let stopName = 'depot';

    async function depart() {
        const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + stopID);
        const data = await response.json();

        stopName=data.name;
        stopID = data.next;

        arriveButton.disabled = false;
        departButton.disabled = true;

        busStopInfo.textContent = `Next stop ${stopName}`;
    }

    async function arrive() {

        departButton.disabled = false;
        arriveButton.disabled = true;

        busStopInfo.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();