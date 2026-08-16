(function() {
    const track = document.getElementById('sliderTrack');
    const leftArrow = document.getElementById('arrowLeft');
    const rightArrow = document.getElementById('arrowRight');
    const dotsContainer = document.getElementById('dotsContainer');

    if (!track) return;

    const cards = document.querySelectorAll('.student-card');
    const cardCount = cards.length;

    for (let i = 0; i < cardCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;
        const percent = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const activeIndex = Math.min(cardCount - 1, Math.round(percent * (cardCount - 1)));
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }

    track.addEventListener('scroll', updateDots);

    function getCardWidth() {
        const card = document.querySelector('.student-card');
        return card ? card.offsetWidth + 30 : 0;
    }

    leftArrow.addEventListener('click', () => {
        const width = getCardWidth();
        if (width) track.scrollBy({ left: -width, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        const width = getCardWidth();
        if (width) track.scrollBy({ left: width, behavior: 'smooth' });
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            const width = getCardWidth();
            if (width) {
                const targetScroll = index * width;
                track.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('resize', updateDots);
    updateDots();
})();

    // Таймер для тёмного тарифного блока
    (function() {
        const hoursEl = document.getElementById('hoursDark');
        const minutesEl = document.getElementById('minutesDark');
        const secondsEl = document.getElementById('secondsDark');

        if (!hoursEl || !minutesEl || !secondsEl) return;

        let totalSeconds = 23 * 3600 + 59 * 60 + 59;

        function updateTimer() {
            if (totalSeconds <= 0) {
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }

            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');

            totalSeconds--;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    })();

    // Таймер для финального блока
    (function() {
        const hoursEl = document.getElementById('hoursFinal');
        const minutesEl = document.getElementById('minutesFinal');
        const secondsEl = document.getElementById('secondsFinal');

        if (!hoursEl || !minutesEl || !secondsEl) return;

        let totalSeconds = 23 * 3600 + 23 * 60 + 44;

        function updateTimer() {
            if (totalSeconds <= 0) {
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }

            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');

            totalSeconds--;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    })();
