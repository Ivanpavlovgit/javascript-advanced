import {html, render} from 'https://unpkg.com/lit-html?module';
import createArticle from './article.js';


const articleTemplate = (article, articleClass) => html`
    <article>
        <header>
            <h3>${article.title}</h3>
            <h4>Clicked: ${article.counter}</h4>
        </header>
        <div class=${articleClass}>
            <p>${article.content}
            </p>
        </div>
        <footer>${article.author}
            <button @click=${() => alert('You clicked me!')}>Edit</button>
        </footer>
    </article>
`;

async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const main = document.getElementById('content');


    document.getElementById('btn').addEventListener('click', onClick);

    function onClick() {

        const result = articles.map(articleTemplate);

        render(result, main);

    }
}

start();
