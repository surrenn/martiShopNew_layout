"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //HAMBURGER AND MOBILE MENU
    const headerTop = document.querySelector('.header-top');
    const mobileMenu = document.querySelector('.mob-menu');

    function isMobileMenuActive (elem) {

        if (elem.classList.contains('hamburger_active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }

    headerTop.addEventListener('click', (e) => {
        const elem = e.target.parentElement;

        if (elem.classList.contains('hamburger')) {
            elem.classList.toggle('hamburger_active');
            mobileMenu.classList.toggle('mob-menu_active');

            isMobileMenuActive(elem);

            mobileMenu.querySelectorAll('.mob-list__item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    elem.classList.remove('hamburger_active');
                    mobileMenu.classList.remove('mob-menu_active');

                    isMobileMenuActive(elem);
                });
            });
        };

    });

    //HEADER BOTTOM SEARCH
    const searchBtn = document.querySelector('.header-bottom__search-mob');
    const searchCloser = document.querySelector('.header-form__closer');
    const search = document.querySelector('.header-bottom__search');

    searchBtn.addEventListener('click', () => {
        search.classList.add('header-bottom__search_active');

        searchCloser.addEventListener('click', () => {
            search.classList.remove('header-bottom__search_active');
        });
    });

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
    
    //CATALOG PAGE FILTER
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
    const mobileLists = document.querySelectorAll('.catalog-header__mob-wrapper');


    catalogBtn.addEventListener('click', () => {
        catalogBtn.classList.toggle("header-bottom__catalog_active");
        catalogHeader.classList.toggle("catalog-header_active");

        mobileItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const mobItem = mobileLists[index - 1];
                const backBtn = mobItem.querySelector('.catalog-header__back');

                mobItem.classList.add('catalog-header__mob-wrapper_active');

                backBtn.addEventListener('click', () => {
                    mobItem.classList.remove('catalog-header__mob-wrapper_active');
                });

                const innerItems = document.querySelectorAll('.catalog-header__inner-item');
                
                innerItems.forEach(innerItem => {
                    innerItem.addEventListener('click', (e) => {
                        e.preventDefault();

                        catalogBtn.classList.remove("header-bottom__catalog_active");
                        catalogHeader.classList.remove("catalog-header_active");
                    })
                })

            });
        });

        
    });

   
    //ANSWERS

    const questionHeads = document.querySelectorAll('.question__head');

    questionHeads.forEach(head => {
        head.addEventListener('click', () => {
            head.parentElement.classList.toggle('question_active');
        });
    });

});
