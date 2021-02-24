function solve() {
    const formElements =document.querySelector('#container').children;
    const inputs =Array.from(formElements).slice(0, formElements.length - 1);
//const onScreenButton=[...formElements].slice(formElements.length-1)[0];
    const onScreenButton = document.querySelector('div>button');
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearButton = document.querySelector('section>button');

    onScreenButton.addEventListener('click', createMovie);


    function createMovie(event) {
       //if (inputs[0].value !== '' &&
       //    inputs[1].value !== '' &&
       //    inputs[2].value !== ''
       //) {


            event.preventDefault();
            //removes the default behaviour in this case does not refresh page after clicking button
            // console.log('buttonche');
            const name = inputs[0].value;
            const hall = inputs[1].value;
            const price = Number(inputs[2].value);
            if (!Number.isInteger(price)) {
                return;
            }
        if(!name||!hall||!price){return;}
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';


//create structure for movie display
            const li = eCreate('li',
                eCreate('span', name),
                eCreate('strong', `Hall: ${hall}`),
                eCreate('div',
                    eCreate('strong', `${price.toFixed(2)}`),
                    eCreate('input'),
                    eCreate('button', 'Archive')));

            //add attributes

            li.querySelector('input').placeholder = "Tickets Sold";
            li.querySelector('button').addEventListener('click', createArchive);

            moviesUl.appendChild(li);

            function createArchive() {
                const ticketToBeSold = Number(li.querySelector('input').value);
                if (Number.isInteger(ticketToBeSold)) {
                    const liArchive = eCreate('li',
                        eCreate('span', name),
                        eCreate('strong', `Total amount: ${(price * ticketToBeSold).toFixed(2)}`),
                        eCreate('button', 'Delete'));
                    archiveUl.appendChild(liArchive);
                    li.remove();
                    liArchive.querySelector('button').addEventListener('click', () => {
                        liArchive.remove();
                    });
                }
            }
        }
        clearButton.addEventListener('click', clearArchive);

        function clearArchive() {
            const archivedLisToRemove = Array.from(archiveUl.children);
            for (const element of archivedLisToRemove) {
                element.remove();
            }

        }

        function eCreate(type, ...content) {
            const result = document.createElement(type);

            content.forEach(e => {
                if (typeof e === 'string') {
                    const node = document.createTextNode(e)
                    result.appendChild(node);
                } else {
                    result.appendChild(e);
                }
            });
            return result;
        }



}
