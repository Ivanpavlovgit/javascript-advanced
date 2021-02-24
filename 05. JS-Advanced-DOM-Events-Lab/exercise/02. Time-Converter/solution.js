function attachEventsListeners() {
    document.querySelectorAll('input[type=button]')
        .forEach(b => b
            .addEventListener('click', (event) => {
        console.log(event.target);
    }));
//TODO MAKE THIS IT WILL BE FUN
}