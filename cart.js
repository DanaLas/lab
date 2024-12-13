let cart = JSON.parse(localStorage.getItem('cart')) || []; // Получаем корзину из localStorage

// Функция для отображения товаров в корзине
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Очистка текущего содержимого

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Корзина пуста</p>';
        document.getElementById('total-price').innerText = 'Общая стоимость: 0 руб.';
        return;
    }

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price} руб.</p>
            <button class="remove-btn" data-index="${index}">Удалить</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `Общая стоимость: ${totalPrice} руб.`;

    // Назначаем обработчики событий для кнопок удаления
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1); // Удаляем товар из массива
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновлённый массив в localStorage
    displayCart(); // Обновляем отображение корзины
}

// Инициализация отображения корзины
displayCart();