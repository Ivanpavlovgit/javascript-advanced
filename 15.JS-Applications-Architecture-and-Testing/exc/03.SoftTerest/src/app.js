//setup views
//setup nav links
//show appropriate navigation based on user session

import {setupHome} from  './views/home.js';


const main = document.querySelector('main');
const nav = document.querySelector('nav');
const views = {};
const links = {};
const navigation = {
    goTo
};

registerView('home', document.getElementById('home-page'),setupHome,'homeLink');

setupNavigation();
//start app in home view
goTo('home');

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if(linkId){
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);
    main.appendChild(section);
}

function setupNavigation() {
    setUserNav();
    nav.addEventListener('click', (event) => {
        const viewName = links[event.target.id];
        if (viewName) {
            event.preventDefault();
            goTo(viewName);
        }
    })
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }
}