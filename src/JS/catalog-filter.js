"use strict";

const catalogHide = document.querySelector('.catalog__hide');
const catalogFormWrapper = document.querySelector('.catalog__form-wrapper');
const catalogFormContent = document.querySelector('.catalog__form-wrapper > *');

console.log(catalogFormContent.clientHeight);

catalogHide.addEventListener("click", () => {
    catalogHide.classList.toggle('catalog__hide_active');

    if (catalogHide.classList.contains("catalog__hide_active")) {
        catalogFormWrapper.style.maxHeight = `${catalogFormContent.clientHeight}px`;
        catalogFormWrapper.style.overflow = 'visible';
    } else {
        catalogFormWrapper.style.maxHeight = '0px';
        catalogFormWrapper.style.overflow = 'hidden';
    }
});