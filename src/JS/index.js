"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //HAMBURGER AND MOBILE MENU
    const mobileMenu = document.querySelector('.header-top__nav');
    const hamburger = document.querySelector('.hamburger');

    function isMobileMenuActive () {

        if (hamburger.classList.contains('hamburger_active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        mobileMenu.classList.toggle('header-top__nav_active');
        isMobileMenuActive();

        if (hamburger.classList.contains('hamburger_active')) {
            mobileMenu.querySelectorAll('.header-menu__item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    hamburger.classList.remove('hamburger_active');
                    mobileMenu.classList.remove('header-top__nav_active');

                    isMobileMenuActive();
                });
            });
        }
    })



    //HEADER BOTTOM SEARCH
    const searchBtn = document.querySelector('.header-bottom__search-mob');
    const searchCloser = document.querySelector('.header-form__closer');
    const search = document.querySelector('.header-bottom__search');
    const actions = document.querySelector('.actions');

    searchBtn.addEventListener('click', () => {
        search.classList.add('header-bottom__search_active');
        actions.style.display = 'none';

        searchCloser.addEventListener('click', () => {
            search.classList.remove('header-bottom__search_active');
            actions.style.display = 'flex';
        });
    });

    //CATALOG-HEADER
    // const catalogBtn = document.querySelector('.header-bottom__catalog');
    // const catalogHeader = document.querySelector('.catalog-header');
    // const mobileItems = document.querySelectorAll('.catalog-header__item');
    // const mobileLists = document.querySelectorAll('.catalog-header__mob-wrapper');


    // catalogBtn.addEventListener('click', () => {
    //     catalogBtn.classList.toggle("header-bottom__catalog_active");
    //     catalogHeader.classList.toggle("catalog-header_active");
        
    //     mobileItems.forEach((item, index) => {
    //         item.addEventListener('click', () => {
    //             const mobItem = mobileLists[index - 1];
    //             const backBtn = mobItem.querySelector('.catalog-header__back');

    //             mobItem.classList.add('catalog-header__mob-wrapper_active');
    //             document.querySelector('body').style.overflow = 'hidden';

    //             backBtn.addEventListener('click', () => {
    //                 mobItem.classList.remove('catalog-header__mob-wrapper_active');
    //             });

    //             const innerItems = document.querySelectorAll('.catalog-header__inner-item');
                
    //             innerItems.forEach(innerItem => {
    //                 innerItem.addEventListener('click', (e) => {
    //                     e.preventDefault();

    //                     catalogBtn.classList.remove("header-bottom__catalog_active");
    //                     catalogHeader.classList.remove("catalog-header_active");
    //                 })
    //             })

    //         });
    //     });
    // });   

    // const area = document.querySelector('.catalog-select__inner_active');

    // area.addEventListener('click', (e) => {
    //     console.log(e.target);
    // });


    //INPUTS
    const inputs = document.querySelectorAll('input');

    if (inputs.length != 0) {
        inputs.forEach(input => {
            if (!input.classList.contains("cart-btn__input")) {
                input.addEventListener('input', function() {
                    if (input.value.trim() !== "") {
                        input.classList.add('has-text');
                    } else {
                        input.classList.remove('has-text');
                    }
                });
            }
        })
    }
});
