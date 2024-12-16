"use strict";

const images = document.querySelectorAll('.product-slider__img');
const arrows = document.querySelectorAll('.product-slider__arr');
const miniImages = document.querySelectorAll('.product-slider__mini-img');
let imageIndex = 0;

function show (index) {
    miniImages[imageIndex].classList.remove('product-slider__mini-img_active');
    images[imageIndex].classList.remove('product-slider__img_active');
    miniImages[index].classList.add('product-slider__mini-img_active');
    images[index].classList.add('product-slider__img_active');
    imageIndex = index;
}

arrows.forEach((e) => {
    e.addEventListener('click', (ev) => {

        if (ev.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (ev.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});

miniImages.forEach((item, index) => {
    item.addEventListener("click", () => show(index));
})

show(imageIndex);

//PRODUCT DESCR
const titles = document.querySelectorAll('.product-descr__name');
const texts = document.querySelectorAll('.product-descr__text');

let titleIndex = 0;

function showText (index) {
    titles[titleIndex].classList.remove('product-descr__name_active');
    texts[titleIndex].classList.remove('product-descr__text_active');

    titles[index].classList.add('product-descr__name_active');
    texts[index].classList.add('product-descr__text_active');

    titleIndex = index;
}

titles.forEach((title, index) => {
    title.addEventListener("click", () => showText(index));
});

showText(titleIndex); 

//SIMILAR-SLIDER
const similarPages = document.querySelectorAll('.similar-slider__page');
const similarArrows = document.querySelectorAll('.similar-slider__arr');
let currentPage = 0;

function showPage (index) {
    similarPages[currentPage].classList.remove('similar-slider__page_active');
    similarPages[index].classList.add('similar-slider__page_active');

    currentPage = index;
}

similarArrows.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if (e.target.classList.contains('similar__prev')) {
            let index = currentPage - 1;

            if (index < 0) {
                index = similarPages.length - 1;
            }

            showPage(index);
        } else if (e.target.classList.contains('similar__next')) {
            let index = currentPage  + 1;

            if (index >= similarPages.length) {
                index = 0;
            }
            showPage(index);
        }
    });
});

showPage(currentPage);