function filterProducten(catagorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function(product) {
        if (product.dataset.category === catagorie || catagorie === 'alles') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function addToCart(productName, productPrice) {
    console.log(productName, productPrice);
    const cart =JSON.parse(localStorage.getItem('cart')) || [];

    let index = cart.findIndex((element) => element.name === productName);

    if (index >= 0) {
        cart[index].amount += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            amount: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}