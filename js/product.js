let productSwiper = new Swiper(".product__slider", {
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



let accessoriesSwiper = new Swiper(".accessories__slider", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 2,
    allowTouchMove: true,
    breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1000: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".accessories__btn-next",
        prevEl: ".accessories__btn-prev",
    },
    pagination: {
        el: '.accessories__slider-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="pages-item ${className}">${index + 1}</span>`;
        },
    },
});