function solve() {
    const [input, output] = [...document.querySelectorAll('textarea')];
    const table = document.querySelector('table.table tbody');
    const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];

    const furniture = [];

    generateBtn.addEventListener('click', () => {
        const furnitureArr = JSON.parse(input.value.trim());
        table.innerHTML = '';
        furnitureArr.forEach(f => {
            const item = createRow(f);
            furniture.push(item);
            table.appendChild(item.element);
        });
    });

    buyBtn.addEventListener('click', () => {
       // furniture.filter(f =>)
       furniture.forEach(f=>console.log(f.getValues().name, f.isChecked()));
    });

    function createRow(data) {
        const img = eCreate('img');
        img.src = data.img;
        const check = eCreate('input');
        check.type = 'checkbox';

        const element = eCreate('tr',
            eCreate('td', img),
            eCreate('td', eCreate('p', data.name)),
            eCreate('td', eCreate('p', data.price)),
            eCreate('td', eCreate('p', data.decFactor)),
            eCreate('td', check));

        return {
            element,
            isChecked,
            getValues
        }

        function isChecked() {
            return check.checked;
        }
        function getValues() {
            return data;

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