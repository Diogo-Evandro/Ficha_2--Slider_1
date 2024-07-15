const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

document.getElementById('left').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    images[currentIndex].classList.add('active');
});

document.getElementById('right').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    images[currentIndex].classList.add('active');
});
