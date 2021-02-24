function solve() {
    const output = document.querySelector('textarea');
    const cart = [];

    function add(event) {
        if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product') {
            const product = event.target.parentNode.parentNode;
            const title = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
            cart.push({title, price});
        }

    };

    function checkout() {
        const result = cart.reduce((acc, c) => {
            if (!acc.items.includes(c.title)) {
                acc.items.push(c.title);
            }
            acc.total += c.price;
            return acc;
        }, {items: [], total: 0});
        output.value += `"You bought ${result.items.filter((a, b) => a !== b).join(', ')} for ${result.total.toFixed(2)}."`
        document.querySelector('.shopping-cart').removeEventListener('click', add);
        document.querySelector('.checkout').removeEventListener('click', checkout);
    };
    document.querySelector('.shopping-cart').addEventListener('click', add);
    document.querySelector('.checkout').addEventListener('click', checkout);

}