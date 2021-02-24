function toggle() {
    let textExtra = document.getElementById('extra');
    let btn = document.querySelector('.button');

    textExtra.style.display = textExtra.style.display === 'none' ? 'block' : 'none';
btn.textContent=btn.textContent==='More'?'Less':'More';

}