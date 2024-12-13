let cart = JSON.parse(localStorage.getItem('cart')) || []; // Инициализация корзины

// Функция для добавления товара в корзину
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем корзину в localStorage
    alert(`${product.name} добавлен в корзину`);
}

// Назначаем действие кнопке "Купить" для каждого товара
document.querySelectorAll('.product').forEach((productElement) => {
    const button = productElement.querySelector('.btn');

    button.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем переход по ссылке

        const productName = productElement.querySelector('p').innerText;
        const priceElement = productElement.querySelector('.price');
        let productPrice;

        // Проверяем наличие новой цены
        const newPriceElement = priceElement.querySelector('.new-price');
        if (newPriceElement) {
            // Если новая цена есть, используем её
            productPrice = parseInt(newPriceElement.innerText.replace('Цена: ', '').replace(' руб.', ''));
        } else {
            // Если новой цены нет, используем обычную цену
            productPrice = parseInt(priceElement.innerText.replace('Цена: ', '').replace(' руб.', ''));
        }

        const product = {
            name: productName,
            price: productPrice
        };
        addToCart(product);
    });
});