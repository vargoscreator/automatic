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
var swiper = new Swiper(".elements__thumbs", {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".elements__slider", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    allowTouchMove: false,
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
document.querySelector(".elements__content").addEventListener("click", function () {
    swiper2.autoplay.stop();
});

document.addEventListener("click", function(event) {
    const blocks = document.querySelectorAll(".elements__slide-block");
    blocks.forEach(block => {
        const btn = block.querySelector(".elements__slide-btn");
        if (btn.contains(event.target)) {
            block.classList.toggle("active");
        } else if (!block.contains(event.target)) {
            block.classList.remove("active");
        }
    });
});


const ElementsButtons = document.querySelectorAll('.elements__select-btn');
ElementsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dataGen = button.getAttribute('data-gen');
        if (dataGen === 'gen-first') {
            document.querySelectorAll('.gen-first').forEach(el => el.classList.add('active'));
            document.querySelectorAll('.gen-second').forEach(el => el.classList.remove('active'));            
        } else if (dataGen === 'gen-second') {
            document.querySelectorAll('.gen-first').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.gen-second').forEach(el => el.classList.add('active'));
        }
        ElementsButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

document.querySelectorAll('.elements__slide-btn span').forEach((btn) => {
    const delay = Math.random() * 1;
    btn.style.setProperty('--animation-delay', `${delay}s`);
});

const elementsbox = document.querySelector('.elements__box');
    const elementsimage = document.querySelector('.elements__box-image');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth > 768) {
          elementsimage.classList.add('active');
        }    
      });
    }, { threshold: 0.5 });
    observer.observe(elementsbox);

    const elementsBlockimage = document.querySelector('.elements__block-image');
    const observerBlock = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && window.innerWidth > 768) {
            elementsBlockimage.classList.add('active');
          }    
        });
    }, { threshold: 1 });  
    observerBlock.observe(elementsBlockimage);

    const elementsItems = document.querySelectorAll('.elements__item');
    const observerItems = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth > 768) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.6 });  
    elementsItems.forEach(item => observerItems.observe(item));
  
function checkScroll() {
    const header = document.querySelector('.header-main');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
checkScroll()
window.addEventListener('resize', checkScroll);
window.addEventListener('scroll', checkScroll);

const images = document.querySelectorAll('.elements__slide');
const elementsSlider = document.querySelector('.elements__slider');
const elementsThumbs = document.querySelector('.elements__thumbs');
elementsThumbs.addEventListener('click', () => {
    images.forEach(image => image.classList.remove('zoomed'));
    elementsSlider.classList.remove('active');
});
function isMobile() {
    return window.innerWidth < 768;
}
images.forEach((image, index) => {
    image.addEventListener('click', function (event) {
        if (!isMobile()) return;
        const button = event.target.closest('.elements__slide-btn');
        if (button) {
            if (!image.classList.contains('zoomed')) {
                const rect = image.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;
                const content = image.querySelector('.elements__slide-content');
                if (index === 0) {
                    content.style.transformOrigin = `${(offsetX / rect.width) * 100}% 0%`;
                } else {
                    content.style.transformOrigin = `${(offsetX / rect.width) * 100}% 62.6786%`;
                }

                image.classList.add('zoomed');
                elementsSlider.classList.add('active');
            }
            return;
        }
        if (image.classList.contains('zoomed')) {
            image.classList.remove('zoomed');
            elementsSlider.classList.remove('active');
        }
    });
});
const slideContents = document.querySelectorAll('.elements__slide-content');
slideContents.forEach(slider => {
    let currentOriginX = 50;
    let currentOriginY = 50;

    function updateTransformOrigin(element, deltaX) {
        currentOriginX = Math.max(0, Math.min(100, currentOriginX - deltaX));
        const [originX, originY] = element.style.transformOrigin.split(' ');
        const verticalOrigin = parseFloat(originY) || 0;
        element.style.transformOrigin = `${currentOriginX}% ${verticalOrigin}%`;
    }
    const onMouseMove = (moveEvent) => {
        const deltaX = (moveEvent.clientX - startX) / slider.offsetWidth * 100;
        startX = moveEvent.clientX;
        updateTransformOrigin(slider, deltaX);
    };
    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    const onTouchMove = (moveEvent) => {
        const deltaX = (moveEvent.touches[0].clientX - startX) / slider.offsetWidth * 100;
        startX = moveEvent.touches[0].clientX;
        updateTransformOrigin(slider, deltaX);
    };
    const onTouchEnd = () => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    };
    slider.addEventListener('mousedown', (e) => {
        if (!isMobile()) return;
        startX = e.clientX;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    slider.addEventListener('touchstart', (e) => {
        if (!isMobile()) return;
        startX = e.touches[0].clientX;
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });
});
