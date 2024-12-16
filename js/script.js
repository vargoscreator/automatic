document.addEventListener("DOMContentLoaded", function () {
  // let swiper = new Swiper(".swiper", {
  //     loop: false,
  //     spaceBetween: 20,
  //     slidesPerView: 2,
  //     allowTouchMove: false,
  //     navigation: {
  //         nextEl: ".button-next",
  //         prevEl: ".button-prev",
  //     },
  //     breakpoints: {
  //         775: {
  //             spaceBetween: 30,
  //             slidesPerView: 3,
  //         },
  //         931: {
  //             spaceBetween: 30,
  //             slidesPerView: 4,
  //         },
  //     },
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  const langBlock = document.querySelector(".header__lang");
  const body = document.querySelector(".body");
  const menuBlock = document.querySelector(".header__menu");
  const headerBlock = document.querySelector(".header__block");
  const headerBurger = document.querySelector(".header__burger");
  const headerMenu = document.querySelector(".header__menu");
  const basketButton = document.querySelector(".header__basket");
  const basketBlock = document.querySelector(".header__basket-block");
  const svgPath = document.querySelectorAll('.wherebuy__content svg path');
  const buyPopup = document.querySelector('.buypopup');
  const popupClose = document.querySelectorAll('.buypopup__close, .buypopup__bg');
  
  basketButton.addEventListener("click", (event) => {
      event.stopPropagation();
      basketBlock.classList.toggle("active");
  });
  
  document.addEventListener("click", (event) => {
      if (!basketBlock.contains(event.target) && !basketButton.contains(event.target)) {
          basketBlock.classList.remove("active");
      }
  });
  
  svgPath.forEach(element => {
    element.addEventListener('click', () => {
      buyPopup.classList.add('active');
    });
  });

  popupClose.forEach(element => {
    element.addEventListener('click', () => {
      buyPopup.classList.remove('active');
    });
  });
  
  headerBurger.addEventListener("click", () => {
      headerBurger.classList.toggle("active");
      headerMenu.classList.toggle("active");
      body.classList.toggle('no-scroll')
  });

  const checkWidthAndClass = () => {
    const width = window.innerWidth;
    if (headerMenu.classList.contains('active') && width > 767) {
      headerBurger.classList.remove("active");
      headerMenu.classList.remove("active");
      body.classList.remove('no-scroll')
    }
  };

  checkWidthAndClass();
  window.addEventListener('resize', checkWidthAndClass);
  
  const moveLangBlock = () => {
      if (window.innerWidth < 768) {
          if (langBlock && !menuBlock.contains(langBlock)) {
              menuBlock.appendChild(langBlock);
          }
      } else {
          if (langBlock && !headerBlock.contains(langBlock)) {
              headerBlock.appendChild(langBlock);
          }
      }
  };
  moveLangBlock();
  window.addEventListener("resize", moveLangBlock);


  const popup = document.querySelectorAll('.popup');
  const contactPopup = document.querySelector('.contactpopup');
  const preorderPopup = document.querySelector('.preorderpopup');
  const contactPopupOpen = document.querySelectorAll('.contactpopup-open');
  const preorderPopupOpen = document.querySelectorAll('.preorder-open');
  const popupCloseBtns = document.querySelectorAll('.popup__bg, .popup__close');
  
  contactPopupOpen.forEach(element => {
    element.addEventListener('click', () => {
      contactPopup.classList.add('active');
    });
  });

  preorderPopupOpen.forEach(element => {
    element.addEventListener('click', () => {
      preorderPopup.classList.add('active');
    });
  });

  popupCloseBtns.forEach(element => {
    element.addEventListener('click', () => {
      popup.forEach(element => {
        element.classList.remove('active');
      });
    });
  });

  if(document.querySelector('.catalogue__filter') && document.querySelector('.catalogue__filter-btn')){
    const filterBlock = document.querySelector('.catalogue__filter');
    const filterButton = document.querySelector('.catalogue__filter-btn');
    filterButton.addEventListener('click', () => {
      filterButton.classList.toggle('active');
      filterBlock.classList.toggle('active');
    });
  }





});





