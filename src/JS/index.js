"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //PRODUCT-SLIDER
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
    })

    miniImages.forEach((item, index) => {
        item.addEventListener("click", () => show(index));
    })

    // show(imageIndex);

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

    // showText(titleIndex);

    //CATALOG FILTER
    const formBlock  = document.querySelector('.catalog__form-block');
    const filterBtn = document.querySelector('.catalog__hide span');
    const hideCaption = document.querySelector('.catalog__hide');
    
    // filterBtn.addEventListener('click', () =>  {
    //     formBlock.classList.toggle('catalog__form-block_active');
    //     hideCaption.classList.toggle('catalog__hide_active');
    // })

    //CATALOG-HEADER
    const catalogBtn = document.querySelector('.header-bottom__catalog');
    const catalogHeader = document.querySelector('.catalog-header');
    const mobileItems = document.querySelectorAll('.catalog-header__item');
    const backBtn = document.querySelector('.catalog-header__back');

    catalogBtn.addEventListener('click', () => {
        catalogBtn.classList.toggle("header-bottom__catalog_active");
        catalogHeader.classList.toggle("catalog-header_active");
    });

    mobileItems.forEach(item => {
        item.addEventListener('click', () => {
            const wrapper = item.querySelector('.catalog-header__wrapper');
            wrapper.classList.add('catalog-header__wrapper_active');

            backBtn.addEventListener('click', () => {
                wrapper.classList.remove('catalog-header__wrapper_active');
            })
        });
    })


});
