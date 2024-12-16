let clauseSwiper = new Swiper(".interested__slider", {
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
        479: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.interested__slider-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="pages-item ${className}">${index + 1}</span>`;
        },
    },
});