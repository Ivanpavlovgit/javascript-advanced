function addItem() {
    let input = document.getElementById('newText');
    const liElement = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    liElement.appendChild(deleteBtn);
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;

    }
}
