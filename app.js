// Carrossel
const carroselContainer = document.getElementById('carroselContainer');
let isDown = false;
let startX;
let scrollLeft;
let animationFrame;

// Função para animar o carrossel de maneira suave
const smoothScroll = () => {
    if (isDown) {
        const currentScrollLeft = carroselContainer.scrollLeft;
        const distance = scrollLeft - currentScrollLeft;
        const easing = distance / 10; // Ajuste para suavizar o movimento

        carroselContainer.scrollLeft += easing;

        if (Math.abs(distance) > 0.1) {
            animationFrame = requestAnimationFrame(smoothScroll);
        } else {
            cancelAnimationFrame(animationFrame);
        }
    }
};

// Eventos de mouse
carroselContainer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    carroselContainer.classList.add('active');
    startX = e.pageX - carroselContainer.offsetLeft;
    scrollLeft = carroselContainer.scrollLeft;
    animationFrame = requestAnimationFrame(smoothScroll);
});

carroselContainer.addEventListener('mouseup', () => {
    isDown = false;
    carroselContainer.classList.remove('active');
});

carroselContainer.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!isDown) return;
    const x = e.pageX - carroselContainer.offsetLeft;
    const walk = (x - startX) * 4; // Ajuste para a velocidade
    carroselContainer.scrollLeft = scrollLeft - walk;
});

// Eventos de toque
carroselContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    carroselContainer.classList.add('active');
    startX = e.touches[0].pageX - carroselContainer.offsetLeft;
    scrollLeft = carroselContainer.scrollLeft;
    animationFrame = requestAnimationFrame(smoothScroll);
});

carroselContainer.addEventListener('touchend', () => {
    isDown = false;
    carroselContainer.classList.remove('active');
});

carroselContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isDown) return;
    const x = e.touches[0].pageX - carroselContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste para a velocidade
    carroselContainer.scrollLeft = scrollLeft - walk;
});

