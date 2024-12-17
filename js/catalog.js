function moveBlock() {
    const catalogueTop = document.querySelector('.catalogue__top');
    const catalogueRight = document.querySelector('.catalogue__right');
    const catalogueRightTop = document.querySelector('.catalogue__right-top');

    if (window.innerWidth < 768) {
        if (catalogueRight.contains(catalogueRightTop)) {
            catalogueTop.appendChild(catalogueRightTop);
        }
    } else {
        if (!catalogueRight.contains(catalogueRightTop)) {
            catalogueRight.appendChild(catalogueRightTop);
        }
    }
}
window.addEventListener('load', moveBlock);
window.addEventListener('resize', moveBlock);
