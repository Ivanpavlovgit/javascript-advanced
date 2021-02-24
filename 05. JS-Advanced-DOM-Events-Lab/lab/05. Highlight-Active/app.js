function focus() {
    [...document.getElementsByTagName('input')].forEach(e => {
        e.addEventListener('focus', onFocus);
        e.addEventListener('blur', onBlur);
    });
    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }
    function onBlur(event) {
        event.target.parentNode.className = '';
    }
}