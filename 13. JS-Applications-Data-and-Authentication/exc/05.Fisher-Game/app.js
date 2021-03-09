async function loadAllCatches() {
    const response= await fetch('http://localhost:3030/data/catches');
  const data=await response.json();
    console.log(data);
}

function attachEvents() {
const loadBtn=document.querySelector('.load');
loadBtn.addEventListener('click',loadAllCatches)
}

attachEvents();

async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}