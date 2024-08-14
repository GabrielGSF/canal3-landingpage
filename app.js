//Contagem Regressiva
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('11/02/2024 00:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;

    document.getElementById('days').innerText = Math.floor(diff / day);
    document.getElementById('hours').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);

    document.getElementById('days2').innerText = Math.floor(diff / day);
    document.getElementById('hours2').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutes2').innerText = Math.floor(diff % hour / minute);

}

//Carossel
function setupCarousel(carouselId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        track.classList.add('active');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        e.preventDefault(); // Evita a seleção de texto acidental ao arrastar
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.classList.remove('active');
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        track.classList.remove('active');
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste o fator para controlar a velocidade de rolagem
        track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });

    track.addEventListener('touchend', () => {
        isDown = false;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste o fator para controlar a velocidade de rolagem
        track.scrollLeft = scrollLeft - walk;
    });
}

// Inicialize os carrosséis
setupCarousel('carousel1');
setupCarousel('carousel2');
