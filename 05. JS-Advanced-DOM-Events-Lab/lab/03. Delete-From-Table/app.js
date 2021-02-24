function deleteByEmail() {
    const listToSearch = [...document.querySelectorAll('tbody tr td:nth-child(2)')];
    const input = document.querySelector('input[name="email"]').value;
    const result = document.getElementById('result');
    for (const email of listToSearch) {
        if (email.textContent === input) {
            email.parentNode.remove();
            result.textContent = 'Deleted';
            break;
        } else {
            result.textContent = "Not found.";
        }
    }
}