function notify(message) {
    const notification = document.querySelector('#notification');
    notification.textContent = message;
    notification.style.display = 'block';

    function showHide(e) {
        e.target.style.display = 'none';
    }

    notification.addEventListener('click', showHide);
}