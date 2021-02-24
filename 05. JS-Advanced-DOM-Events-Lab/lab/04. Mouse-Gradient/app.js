function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(event) {
        //   const offsetX = event.pageX - event.target.offsetLeft;
        //use the one above because .offsetX is considered experimental at this point in time
        const offsetX = event.offsetX;
        const offsetPercentX = Math.floor(offsetX * 100 / event.target.clientWidth);
        output.textContent = `${offsetPercentX}%`;

    }
}