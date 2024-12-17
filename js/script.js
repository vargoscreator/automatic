document.addEventListener("DOMContentLoaded", () => {

  const catalogLink = document.querySelector('.header__catalog-link');
  const linkCatalog = document.querySelector('.header__link-catalog');
  const menuBg = document.querySelector('.header__menu-bg');
  const body = document.querySelector(".body");
  const headerBurger = document.querySelector(".header__burger");
  const headerMenu = document.querySelector(".header__menu");
  const basketButton = document.querySelector(".header__basket");
  const basketBlock = document.querySelector(".header__basket-block");

  
  function addCatalogMore() {
    headerMenu.classList.add('catalog-more');
  }
  function removeCatalogMore() {
    headerMenu.classList.remove('catalog-more');
  }
  [catalogLink, linkCatalog, menuBg].forEach(element => {
    element.addEventListener('mouseenter', addCatalogMore);
    element.addEventListener('mouseleave', removeCatalogMore);
  });

  
  basketButton.addEventListener("click", (event) => {
      event.stopPropagation();
      basketBlock.classList.toggle("active");
  });
  
  document.addEventListener("click", (event) => {
      if (!basketBlock.contains(event.target) && !basketButton.contains(event.target)) {
          basketBlock.classList.remove("active");
      }
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


  if(document.querySelector(".wherebuy__content")){
    const svg = document.querySelector(".wherebuy__content svg");
    const tooltip = document.getElementById("tooltip");
    svg.addEventListener("mousemove", (e) => {
      const target = e.target;
      if (target.tagName === "path" && target.dataset.country) {
          tooltip.textContent = target.dataset.country;
          tooltip.style.left = `${e.pageX}px`;
          tooltip.style.top = `${e.pageY - 5}px`;
          tooltip.style.transform = "translate(-50%, -100%)";
          tooltip.style.display = "block";
      }
  });

    svg.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
    svg.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "path") {
            tooltip.style.display = "none";
        }
    });
    }


  let wherebuySwiper = null;
function initWherebuySwiper() {
  if (window.innerWidth < 768) {
    if (!wherebuySwiper) {
      wherebuySwiper = new Swiper(".wherebuy__result", {
        loop: false,
        spaceBetween: 30,
        slidesPerView: 1,
        allowTouchMove: true,
        pagination: {
            el: '.wherebuy__result-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="pages-item ${className}">${index + 1}</span>`;
            },
        },
      });
    }
  } else {
    if (wherebuySwiper) {
      wherebuySwiper.destroy(true, true);
      wherebuySwiper = null;
    }
  }
}
if (document.querySelector('.wherebuy__result')) {
  initWherebuySwiper();
  window.addEventListener('resize', initWherebuySwiper);
}
});




