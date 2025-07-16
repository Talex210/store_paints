// Инициализация корзины
const cart = {
    items: [],
    count: 0,
    total: 0,

    updateCartDisplay() {
        document.querySelector('.header__cart-count').textContent = this.count;
    }
};

// Обновляем отображение корзины при загрузке
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCartDisplay();

    // Обработчики для кнопок шапки
    document.querySelector('.header__action-btn--cart').addEventListener('click', () => {
        console.log('Открыть корзину');
        // Здесь будет логика открытия модального окна корзины
    });

    document.querySelector('.header__action-btn--menu').addEventListener('click', () => {
        console.log('Открыть меню');
        // Здесь будет логика открытия мобильного меню
    });
});
