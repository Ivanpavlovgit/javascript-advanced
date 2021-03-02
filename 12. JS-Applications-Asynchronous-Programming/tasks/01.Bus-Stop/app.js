function getInfo() {
    const stopID = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const bussesList = document.getElementById('buses');
  //  const validStopsArr = [1287, 1308, 1327, 2334];
    bussesList.innerHTML = '';
    collectInfo(stopID);


    async function collectInfo(stopID) {
        // if(!validStopsArr.includes(stopID)){
        //     stopName.textContent='Error';
        // }
        // Please comment if you think that this check is better or give advice for better
        //solution to verify this data for valid stops :)
        const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + stopID);
        if (response) {
            stopName.textContent = 'Error';
        }
        const data = await response.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(bus => {
            const busID = bus[0];
            const busTime = bus[1];

            const busListItem = e('li', {}, `Bus ${busID} arrives in ${busTime}`);
            bussesList.appendChild(busListItem);
        });
        document.getElementById('stopId').value = '';

    }


    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) === 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}