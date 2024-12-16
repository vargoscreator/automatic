let clauseSwiper = new Swiper(".product__slider", {
    loop: false,
    spaceBetween: 8,
    slidesPerView: 1,
    freeMode: true,
    breakpoints: {
        479: {
            slidesPerView: 1,
        },
        767: {
            spaceBetween: 27,
        },
    },
    navigation: {
        nextEl: ".product__slider-next",
        prevEl: ".product__slider-prev",
    },
});

const videoButton = document.querySelector('.product__video-btn');
const videoPopup = document.querySelector('.product__video-popup');
const closeButton = document.querySelector('.product__video-close');
const popupVideo = videoPopup.querySelector('video');
videoButton.addEventListener('click', () => {
    videoPopup.classList.add('active');
    popupVideo.play();
});
closeButton.addEventListener('click', closePopup);
videoPopup.addEventListener('click', (event) => {
    if (!event.target.closest('.product__video-content')) {
        closePopup();
    }
});
function closePopup() {
    videoPopup.classList.remove('active');
    popupVideo.pause();
    popupVideo.currentTime = 0;
}
closePopup()