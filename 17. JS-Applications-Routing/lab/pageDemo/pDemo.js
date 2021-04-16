import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home Page</h2> <p> home Content</p>',
    '/catalog': '<h2>Catalog Page</h2> <p> catalog Content</p>',
    '/catalog/123': '<h2>Catalog Page 123</h2> <p> catalog Content 123</p>',
    '/about': '<h2>About Page</h2> <p> about Content</p>',
    '/about/5': '<h2>About Page</h2> <p> about Content</p>'
}
const defaultPage = '<h2>404</h2> <p> Page not found :D!</p>'
const main = document.querySelector('main');

page('/home', () => updateContent('/home'));
page('/catalog', () => updateContent('/catalog'));
page('/catalog/123', () => updateContent('/catalog/123'));
page('/about', () => updateContent('/about'));
page('/about/5', () => updateContent('/about/5'));
page.start();

function updateContent(pathname) {
    main.innerHTML = pages[pathname] || defaultPage;
}
