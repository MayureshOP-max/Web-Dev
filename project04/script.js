const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

const items = document.querySelectorAll('.item img');
let currentIndex = 0;

items.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        lightboxImage.src = event.target.src;
        lightboxOverlay.classList.remove('hidden');
        currentIndex = index;
        document.body.style.overflow = 'hidden';
    });
});

lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    lightboxImage.src = items[currentIndex].src;
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    lightboxImage.src = items[currentIndex].src;
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightboxOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    } else if (event.key === 'ArrowLeft') {
        lightboxPrev.click();
    } else if (event.key === 'ArrowRight') {
        lightboxNext.click();
    }
});

document.addEventListener('click', (event) => {
    if (event.target === lightboxOverlay) {
        lightboxOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});