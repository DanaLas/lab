let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0; // Если индекс выше, возвращаемся к первому слайду
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Если индекс ниже, переходим к последнему
    } else {
        currentSlide = index; // Устанавливаем текущий индекс
    }

    // Обновляем отображение слайдов
    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentSlide ? '1' : '0';
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Инициализируем отображение первого слайда
showSlide(currentSlide);