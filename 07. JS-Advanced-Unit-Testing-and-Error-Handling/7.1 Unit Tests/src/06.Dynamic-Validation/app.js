function validate() {
    const input = document.querySelector('#email');
    const regex = new RegExp(/[a-z]+@[a-z]+.[a-z]+/gm);

    function isItValid(e) {
        input.classList.add('error');

        const emailAddress = e.target.value;

        if (emailAddress.match(regex)) {
            input.removeAttribute('class');
        }
    }

    input.addEventListener('change', isItValid);

}