const images = document.querySelectorAll('#slider-animations img');
let current = 0;
let isAnimating = false;
const SLIDE_INTERVAL = 2000;

function showNextImage() {
    if (isAnimating) return;
    isAnimating = true;

    const prev = current;
    current = (current + 1) % images.length;

    images.forEach(img => img.classList.remove('active', 'slide-in', 'slide-out'));

    images[prev].classList.add('slide-out');

    images[current].classList.add('slide-in');

    setTimeout(() => {
        images.forEach(img => img.classList.remove('slide-in', 'slide-out'));
        images[current].classList.add('active');
        isAnimating = false;
    }, 1000);
}

images[0].classList.add('active');

setInterval(showNextImage, SLIDE_INTERVAL + 1000);