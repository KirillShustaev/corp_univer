    const loadMoreButton = document.querySelector('.prog__more');
    const cards = document.querySelectorAll('.prog__item');
    let currentIndex = 4; // Начинаем с 4 открытых карточек
    const cardsToShow = 4;

    // Функция для отображения карточек
    function showCards(startIndex, count) {
        for (let i = startIndex; i < startIndex + count && i < cards.length; i++) {
            cards[i].style.display = 'flex';
        }
    }

    // Показываем первые 4 карточки при загрузке
    showCards(0, currentIndex);

    loadMoreButton.addEventListener('click', () => {
        // Показываем карточки
        showCards(currentIndex, cardsToShow);
        currentIndex += cardsToShow;

        // Если все карточки открыты, скрываем кнопку
        if (currentIndex >= cards.length) {
            loadMoreButton.style.display = 'none';
        }
    });


const buttons = document.querySelectorAll('.prog__choice');
const blocks = document.querySelectorAll('.prog__item');

buttons.forEach(button => {
    const targetBlock = button.getAttribute('data-target');
      const loadMoreButton = document.querySelector('.prog__more');

    button.addEventListener('click', () => {
        blocks.forEach(block => {
            if (block.classList.contains(targetBlock)) {
                block.classList.add("visible");
                block.classList.remove("none");
            } else {
                block.classList.add("none");
                block.classList.remove("visible");
            }
            });
        loadMoreButton.classList.add("none")

        for(let e of buttons) {
            e.classList.remove("active")
        }
        button.classList.add("active")
    });
});