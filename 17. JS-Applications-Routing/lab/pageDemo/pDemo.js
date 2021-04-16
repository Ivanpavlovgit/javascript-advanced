import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home Page</h2> <p> home Content</p>',
    '/catalog': '<h2>Catalog Page</h2> <p> catalog Content</p>',
    '/catalog/123': '<h2>Catalog Page 123</h2> <p> catalog Content 123</p>',
    '/catalog/124': '<h2>Catalog Page 124</h2> <p> catalog Content 124</p>',
    '/catalog/pesho/12': '<h2>Catalog Page 125</h2> <p> catalog Content 125</p>',
    '/catalog/mesho/14': '<h2>Catalog Page 125</h2> <p> catalog Content 125</p>',
    '/about': '<h2>About Page</h2> <p> about Content</p>',
    '/about/5': '<h2>About Page</h2> <p> about Content</p>'
}

const defaultPage = '<h2>404</h2> <p> Page not found :D!</p>'
const main = document.querySelector('main');

page('/home', updateContent);
page('/catalog', updateContent);
page('/catalog/:myName/:myAge', itemDetails);
page('/catalog/:id', updateContent);
page('/about', updateContent);
page('/about/5', updateContent);
page.redirect('/', '/home');
page.start();

function updateContent(context) {
    //  console.log(context);
    main.innerHTML = pages[context.pathname] || defaultPage;
}

function itemDetails(context) {
    const myName = context.params.myName;
    const myAge = context.params.myAge;
    const html = `<h2>Item ${myName}</h2><p>Details for ${myName} is ${myAge} years old.</p>`
    main.innerHTML = html;

    const btn = document.createElement('button');
    btn.textContent=`buy ${myName}`
    btn.addEventListener('click', () => {
        context.page.redirect('/catalog');
        console.log(context);
    })
    main.appendChild(btn);
}
