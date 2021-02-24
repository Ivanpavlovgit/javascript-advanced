function create(words) {

    const content = document.getElementById('content');
    for (let i = 0; i < words.length; i++) {
        const htmlDivElement = document.createElement('div');
        const para = document.createElement('p');
        para.textContent = words[i];
        para.style.display = 'none';
        htmlDivElement.appendChild(para);
        content.appendChild(htmlDivElement);
    }

    content.addEventListener('click', function (e) {
        if (e.target.tagName === 'DIV' || e.target.tagName === 'P') {
            const p = e.target.children[0] || e.target;
            const isVisible = p.style.display === 'block';
            p.style.display = isVisible ? 'none' : 'block';
        }
    });

}