//grab section
//setup modules
//setup navigation

//import modules
import {setupHome, showHome} from './home.js';
import {setupDetails} from './details.js';
import {setupLogin, showLogin} from './login.js';
import {setupRegister, showRegister} from './register.js';
import {setupEdit} from './edit.js';
import {setupCreate, showCreate} from './create.js';

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate
}

const main = document.querySelector('main');
setUpSection('home-page', setupHome);
setUpSection('add-movie', setupCreate);
setUpSection('movie-details', setupDetails);
setUpSection('edit-movie', setupEdit);
setUpSection('form-login', setupLogin);
setUpSection('form-sign-up', setupRegister);

setUpNavigation();
//start in home view
showHome();


function setUpSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}


function setUpNavigation() {
    const email = sessionStorage.getItem('email');
    if (email !== null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
    }

    document.querySelector('nav').addEventListener('click', (event) => {
        //    if (event.target.tagName === 'A') {
        const view = links[event.target.id]
        if (typeof view === 'function') {
            event.preventDefault();
            view();
        }
        //   }
    });
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();

    });
    document.getElementById('logoutBtn').addEventListener('click', logout)
}

async function logout() {
    const token = sessionStorage.getItem('authToken');
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': token}
    });
    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
        showHome();
    }else {
        const error = await response.json();
        alert(error.message);
    }
}