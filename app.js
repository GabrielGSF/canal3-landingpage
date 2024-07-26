$('.carousel').slick({
    dots: false,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,

});

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('08/28/2024 00:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;

    document.getElementById('days').innerText = Math.floor(diff / day);
    document.getElementById('hours').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
    document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}

function resetCountdown() {
    clearInterval(x);
    let date_end = document.form_main.date_end.value;
    count_down = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
}